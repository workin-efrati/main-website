"use client";
import { axiosReq } from "@/helpers/axiosReq";
import {
  usePathname,
  useRouter,
  useSearchParams,
  useParams,
} from "next/navigation";
import { Suspense, useCallback, useEffect, useState } from "react";
import PaginationComponent from "../PaginationButtons/index.jsx";
import Question from "../Question/index.jsx";
import debounce from "@/helpers/debounce.js";
import styles from "./style.module.scss";

export const dynamic = "force-dynamic";

const SearchQuestions = () => {
  const router = useRouter();
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { id: tagsParams = "" } = useParams();
  /////////
  const [data, setData] = useState([]);
  const [isThePageTags, setIsThePageTags] = useState(false);

  const [tagsIds, setTagsIds] = useState([]);
  const [dataLength, setDataLength] = useState(0);
  const [searchBy, setSearchBy] = useState(searchParams.get("search") || "");
  const [pageLocation, setPageLocation] = useState(
    Number(searchParams.get("pageLocation")) || 1
  );
  const [pageLength, setPageLength] = useState(
    Number(searchParams.get("pageLength")) || 10
  );

  const params = new URLSearchParams(searchParams);

  /////////
  useEffect(() => {
    if (tagsParams && !isThePageTags) {
      getAllTagsIds(tagsParams);
    }
  }, []);

  const getAllTagsIds = async (id) => {
    const allTags = await axiosReq({
      url: `/tags/tagsWithChildren/${id}`,
      isLocalServer: false,
      method: "GET",
    });
    setTagsIds(allTags);
    setIsThePageTags(true);
  };

  const debouncedChangeHandler = useCallback(
    debounce((newValue) => {
      params.set("search", newValue.trim());
      setSearchBy(newValue);
      replace(`${pathName}?${params}`);
    }, 1000),
    [router, pathName, pageLocation, pageLength, searchBy, params]
  );

  useEffect(() => {
    if (tagsParams && !isThePageTags) return;
    // if not page length or page location add on first load
    const query = Object.fromEntries(params);
    if (!query.pageLength || !query.pageLocation) {
      params.set("pageLocation", 1);
      params.set("pageLength", 10);
      replace(`${pathName}?${params}`);
    }
    fetchDataFromServer();
    return () => {
      debouncedChangeHandler.cancel && debouncedChangeHandler.cancel();
    };
  }, [pageLocation, searchBy, pageLength, isThePageTags]);

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
    console.log(tagsIds);
    // tagsParams && (queryObj.tagsParams = tagsParams);
    tagsParams &&
      (queryObj.includeFilter = {
        searchType: "$or",
        searchValues: [
          {
            field: "tags",
            type: "_id",
            values: tagsIds,
            searchType: "$or",
          },
        ],
      });

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
  const changePageLength = async (newLength) => {
    setPageLength(Number(newLength));
    params.set("pageLength", newLength);
    replace(`${pathName}?${params}`);
  };

  return (
    <div className={styles.container}>
      <input type="text" onChange={handleChange} defaultValue={searchBy} />
      <div
        className={styles.questionContainer}
        style={{ display: "flex", flexDirection: "column" }}
      >
        {data.length > 0
          ? data.map((v) => (
              <Question
                question={v.question}
                key={v._id}
                to={v._id}
                answer={v.answer}
              />
            ))
          : Array.from({ length: pageLength })
              .fill("9")
              .map((v) => {
                return <>{v}</>;
              })}
      </div>
      <PaginationComponent
        changePages={changePages}
        pageLocation={pageLocation}
        resultsPerPage={pageLength}
        totalResults={dataLength}
      />
      <div>
        <label htmlFor="valueSelect">Select a value: </label>
        <select
          id="valueSelect"
          value={pageLength}
          onChange={(e) => {
            changePageLength(e.target.value);
          }}
        >
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={40}>40</option>
          <option value={50}>50</option>
        </select>
      </div>
    </div>
  );
};

export default SearchQuestions;
