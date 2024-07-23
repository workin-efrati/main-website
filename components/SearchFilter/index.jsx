"use client"
import styles from './styles.module.scss'
import { FaSearch } from "react-icons/fa";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import SearchResults from '../SearchResults';
// import jsonTest from '../jsonTest/js'
export default function SearchFilter({ type }) {

  const router = useRouter()
  const [typeInput, setTypeInput] = useState(false)
  const [isSearch, setIsSearch] = useState('')
  const [isSearchSubject, setIsSearchSubject] = useState(false)
  const [valueSearch, setValueSearch] = useState('')

  useEffect(() => {
    if (typeInput === 'נושאים') {
      setIsSearchSubject(true)
    }
    else {
      setIsSearchSubject(false)

    }
  }, [typeInput]);

  let classNameIcon = !isSearch ? 'searchIcon' : 'searchButton';
  const handleSearch = e => {
    if (typeInput === "חיפוש") {
      setIsSearch(e.target.value)
      // router.push(`/result?search=${e.target.value}`)
    }
    else if (typeInput === 'נושאים') {
      setValueSearch(e.target.value)
      // console.log(valueSearch);
    }
  }
  return (<>
    <div className={styles.searchAndResultContainer}>

      <div className={`${styles.container} ${type === "dark" ? styles.containerDark : ""}`}>
        {!typeInput ?

          <div className={styles.buttons}>

            <button className={styles.subjectSearch} onClick={() => setTypeInput("נושאים")}>
              סינון לפי נושא
            </button>
            <div className={`${styles.line} ${type == "dark" ? styles.dark : ""}`}>

            </div>
            <button className={styles.freeSearch} onClick={() => setTypeInput("חיפוש")}>
              טקסט חופשי
            </button>
          </div> :
          <div className={styles.search}>
            <button className={styles.subjectSearch} >
              {typeInput}
            </button>
            <div className={styles.line} >
            </div>


            <input
              type="text"
              name="search"
              autoFocus
              autoComplete="off"
              onChange={handleSearch}
              // onBlur={() => { setTypeInput('') }}
              defaultValue={isSearch}
            ></input>
          </div>
        }
        <div className={`${styles[classNameIcon]}`} >
          <FaSearch />
        </div>
      </div>
      {(isSearchSubject && valueSearch !=='') ? <SearchResults /> :
        isSearchSubject && <SearchResults valueSearch={valueSearch} />
      }

    </div>
  </>
  )
}
