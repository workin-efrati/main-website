"use client";
import { axiosReq } from "@/helpers/axiosReq";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Suspense, useCallback, useEffect, useState } from "react";
import PaginationComponent from "../PaginationButtons/index.jsx";
import Question from "../Question/index.jsx";
import debounce from "@/helpers/debounce.js";
import styles from "./style.module.scss";

export const dynamic = 'force-dynamic'


const SearchQuestions = () => {
  const router = useRouter();
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const pathName = usePathname();
  /////////
  const [data, setData] = useState([]);
  const [dataLength, setDataLength] = useState(0);
  const [searchBy, setSearchBy] = useState(searchParams.get("search") || "");
  const [pageLocation, setPageLocation] = useState(1);
  const [pageLength, setPageLength] = useState(10);

  const params = new URLSearchParams(searchParams);
  /////////

  const debouncedChangeHandler = useCallback(
    debounce((newValue) => {
      params.set("search", newValue.trim());
      setSearchBy(newValue);
      replace(`${pathName}?${params}`);
    }, 1000),
    [router, pathName, pageLocation, pageLength, searchBy, params]
  );

  useEffect(() => {
    // if not page length or page location add on first load
    fetchDataFromServer();
    const query = Object.fromEntries(params);

    if (!query.pageLength || !query.pageLocation) {
      params.set("pageLocation", 1);
      params.set("pageLength", 10);
      replace(`${pathName}?${params}`);
    }

    return () => {
      debouncedChangeHandler.cancel && debouncedChangeHandler.cancel();
    };
  }, [pageLocation, searchBy, pageLocation]);

  const handleChange = (event) => debouncedChangeHandler(event.target.value);

  const fetchDataFromServer = async () => {
    const arrToSearch = searchBy.trim().split(" ");
    const queryObj = {
      queryFilterType: "$and",
      selector: ["-isActive"],
      modelName: "qa",
      pages: { pageLocation: pageLocation - 1, pageLength: pageLength },
      regFilter: {
        searchType: "$and",
        searchValues: arrToSearch.map((v) => {
          return {
            fields: ["question"],
            value: v,
            searchType: "$and",
          };
        }),
      },
    };

    const res = await axiosReq({
      method: "POST",
      url: "/genericQuery",
      body: queryObj,
      isLocalServer: false,
    });
    setData(res.res);
    setDataLength(res.totalCount);
  };

  const changePageInServer = async (pageLocation) =>
    setPageLocation(pageLocation);

  const changePages = async (newLoc) => {
    setPageLocation(Number(newLoc));
    params.set("pageLocation", newLoc);
    await changePageInServer(newLoc);
    replace(`${pathName}?${params}`);
  };

  return (
    <div className={styles.container}>
      <input type="text" onChange={handleChange} defaultValue={searchBy} />
      <div
        className={styles.questionContainer}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <Suspense fallback={<>loading...</>}>
          {data.map((v) => (
            <Question
              question={v.question}
              key={v._id}
              to={v._id}
              answer={v.answer}
            />
          ))}
        </Suspense>
      </div>
      <PaginationComponent
        changePages={changePages}
        pageLocation={pageLocation}
        resultsPerPage={10}
        totalResults={dataLength}
      />
    </div>
  );
};

export default SearchQuestions;
