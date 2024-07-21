import styles from './styles.module.scss'
import getData from '../jsonTest'
import { useState, useEffect } from 'react';
export default function SearchResults() {
const [arr, setArr] = useState([])
  useEffect(() => {
    const getSubject = async () => {
      const res = await getData();
      setArr(res)
    } 
    const rav   = getSubject();
  }, [])
  console.log(arr[0]?.subcategories[0]);
  return (
    <>
      <div className={styles.container}>
        {
          // arr[0]?.map((item, index) => <h4>{item?.title}</h4>)
        }

      </div>
    </>
  )
}
