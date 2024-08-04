'use client'
import { FaSearch } from "react-icons/fa";

import debounce from "@/helpers/debounce";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import style from './style.module.scss';

function SearchVideos({ filter }) {
  const router = useRouter()
  const debouncedChangeHandler = useCallback(
    debounce((e) => {
      if (!filter) filter = "כל השיעורים"
      router.push(e.target.value ? `/videos/?search=${e.target.value}&filter=${filter}` : `/videos/?filter=${filter}`)
    }, 1000),
    [router, filter]
  );
  
  return (<>
    <div className={style.holdInput}>
      <FaSearch
        className={style.searchIcon} />
      <input className={style.input} placeholder={"חפש כאן..."} onChange={debouncedChangeHandler} type="text" />
    </div>
  </>)
}
export default SearchVideos