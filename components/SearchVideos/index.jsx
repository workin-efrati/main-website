'use client'
import { FaSearch } from "react-icons/fa";

import { useRouter } from "next/navigation"
import style from './style.module.scss'
import { useCallback } from "react";
import debounce from "@/helpers/debounce";

function SearchVideos() {
    const router = useRouter()

    const debouncedChangeHandler = useCallback(
        debounce((e) => {
          router.push(e.target.value ? `/videos/?search=${e.target.value}` : `/videos`)
        }, 1000),
        [router]
      );


    return (<>
        <div  className={style.holdInput}>
            <FaSearch
             className={style.searchIcon}/>
            <input className={style.input} placeholder={"חפש כאן..."} onChange={debouncedChangeHandler} type="text" />
        </div>
    </>)
}
export default SearchVideos