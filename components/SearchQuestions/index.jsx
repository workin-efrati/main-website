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
import { fetchReq } from "@/helpers/fetchReq.js";

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
  const [pageLocation, setPageLocation] = useState(Number(searchParams.get("pageLocation")) || 1);
  const [pageLength, setPageLength] = useState(Number(searchParams.get("pageLength")) || 10);

  const [isLoading, setIsLoading] = useState(false)

  const params = new URLSearchParams(searchParams);

  /////////
  useEffect(() => {
    if (tagsParams && !isThePageTags) {
      getAllTagsIds(tagsParams);
    }
  }, []);

  const getAllTagsIds = async (id) => {
    setIsLoading(true)
    try {
      const allTags = await fetchReq({
        url: `tags/tagsWithChildren/${id}`,
        isLocalServer: false,
        method: "GET",
        optionsNext: { next: { revalidate: 60 * 60 } }

      });
      setTagsIds(allTags);
      setIsThePageTags(true);

    } catch (error) {

    }
    // finally {
    //   setIsLoading(true)
    // }
  };

  const debouncedChangeHandler = useCallback(
    debounce((newValue) => {
      params.set("search", newValue.trim());
      params.set("pageLocation", 1);
      setSearchBy(newValue);
      setPageLocation(1);
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

  const handleChange = (event) => {
    debouncedChangeHandler(event.target.value)
    
  };

  const fetchDataFromServer = async () => {
    setIsLoading(true)
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

    try {

      const res = await fetchReq({
        method: "POST",
        url: "genericQuery",
        body: queryObj,
        isLocalServer: false,
        optionsNext: { next: { revalidate: 60 } },

      });
      // await new Promise((resolve) => setTimeout(resolve, 5000));
      setData(res.res);
      setDataLength(res.totalCount);
    } catch (error) {
      // TODO
    } finally {
      setIsLoading(false)
    }
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
      <p className={`${styles.resultsCount} ${isLoading ? styles.loading : ""}`}>
        {(pageLocation - 1) * pageLength} - { ((pageLocation - 1) * pageLength) + pageLength} רשומות
        מתוך {dataLength}
      </p>
      <div className={styles.questionContainer}      >
        {(!isLoading)
          ? data.map((v) => (
            <Question
              question={v.question}
              key={v._id}
              to={v._id}
              title={v.title}
              answer={v.answer}
            />
          ))
          : Array.from({ length: pageLength })
            .fill("9")
            .map((v, i) => {
              return <div className={styles.questionHolder} key={i}>
                <div />
                <div />
              </div>;
            })}
      </div>

      <div className={styles.paginationControls}>
        <PaginationComponent
          changePages={changePages}
          pageLocation={pageLocation}
          resultsPerPage={pageLength}
          totalResults={dataLength}
        />
        <label >כמות תוצאות בדף
          <select
            value={pageLength}
            onChange={(e) => {
              changePageLength(e.target.value);
            }}
          >
            {[10, 25, 40, 50].map((v, i) => <option key={v} value={v}>{v}</option>)}
          </select>
        </label>
      </div>
    </div>
  );
};

export default SearchQuestions;
