"use client"
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaSearch } from "react-icons/fa";
import SearchResults from '../SearchResults';
import styles from './styles.module.scss';
import useAxiosReq from '@/hooks/useAxiosReq'


export default function SearchFilter({ type }) {
  const { data, loading, error } = useAxiosReq({ url: '/category' })

  const router = useRouter()
  const [typeInput, setTypeInput] = useState(false)
  const [isSearch, setIsSearch] = useState('')
  const [isSearchSubject, setIsSearchSubject] = useState(false)
  const [valueSearch, setValueSearch] = useState('')

  useEffect(() => {
    if (typeInput === 'נושאים')
      setIsSearchSubject(true)
    else
      setIsSearchSubject(false)
  }, [typeInput]);

  let classNameIcon = !isSearch ? 'searchIcon' : 'searchButton';

  const handleSearch = e => {
    const value = e.target.value
    if (typeInput === "חיפוש") setIsSearch(value)
    else if (typeInput === 'נושאים') setValueSearch(value)
  }

  const handleClick = () => {
    if (typeInput === 'חיפוש') null
    // router.push(`/result?search=${isSearch}`)
  }


  return (<>
    <div className={styles.preventInput} onClick={() => setTypeInput(false)} />
    <div className={styles.searchAndResultContainer} onClick={(e) => e.preventDefault}>
      <div className={`${styles.container} ${type === "dark" ? styles.containerDark : ""}`}>
        {(!typeInput) ?
          (<div className={styles.buttons}>
            <button className={styles.subjectSearch} onClick={() => setTypeInput("נושאים")}>
              סינון לפי נושא
            </button>
            <div className={`${styles.line} ${styles[type || '']}`} />
            <button className={styles.freeSearch} onClick={() => setTypeInput("חיפוש")}>
              טקסט חופשי
            </button>
          </div>) :
          (<div className={styles.search}>
            <button className={styles.subjectSearch} >
              {typeInput}
            </button>
            <div className={styles.line} />
            <input
              type="text"
              name="search"
              autoFocus
              autoComplete="off"
              onChange={handleSearch}
              defaultValue={isSearch}
            />
          </div>)
        }

        <div className={`${styles[classNameIcon]}`} onClick={handleClick}>
          <FaSearch />
        </div>

      </div>
      {isSearchSubject && <SearchResults data={data} loading={loading} valueSearch={valueSearch} />}
    </div>
  </>
  )
}
