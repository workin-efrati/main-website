"use client"
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaSearch } from "react-icons/fa";
import SearchResults from './SearchResults';
import styles from './styles.module.scss';
import useAxiosReq from '@/hooks/useAxiosReq'
import useFetchReq from '@/hooks/useFetchReq';

export const dynanic = 'force-static';
export default function SearchFilter({ type }) {


  // const { data, loading, error } = useAxiosReq({ url: '/category' })
  const { data, loading, error } = useFetchReq({ url: 'category', optionsNext: { cache: 'force-cache' } })

  const router = useRouter()
  const [typeInput, setTypeInput] = useState(false)
  const [isSearch, setIsSearch] = useState('')
  const [isSearchSubject, setIsSearchSubject] = useState(false)
  const [valueSearch, setValueSearch] = useState('')

  useEffect(() => {
    setIsSearchSubject(typeInput === 'נושאים')
  }, [typeInput]);

  let classNameIcon = !isSearch ? 'searchIcon' : 'searchButton';

  const handleSearch = e => {
    const value = e.target.value
    if (typeInput === "חיפוש") setIsSearch(value)
    else if (typeInput === 'נושאים') setValueSearch(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('search');
    if (typeInput === 'חיפוש')
      router.push(`/question/result?search=${isSearch}`)
  }


  return (<>
    {typeInput && <div className={styles.preventInput} onClick={() => setTypeInput(false)} />}
    <div className={styles.searchAndResultContainer} onClick={(e) => e.preventDefault}>
      <form onSubmit={handleSubmit} className={`${styles.container} ${type === "dark" ? styles.containerDark : ""}`}>
        {(!typeInput) ?
          (<div className={styles.buttons}>
            <button type='button' className={styles.subjectSearch} onClick={() => setTypeInput("נושאים")}>
              סינון לפי נושא
            </button>
            <div className={`${styles.line} ${styles[type || '']}`} />
            <button type='button' className={styles.freeSearch} onClick={() => setTypeInput("חיפוש")}>
              טקסט חופשי
            </button>
          </div>) :
          (<div className={styles.search}>
            <button type='button' className={styles.subjectSearch} >
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

        <button type='submit' className={`${styles[classNameIcon]}`} ><FaSearch /></button>

      </form>
      {isSearchSubject && <SearchResults data={data} loading={loading} valueSearch={valueSearch} />}
    </div>
  </>
  )
}
