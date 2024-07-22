import styles from './styles.module.scss'
import getData from '../jsonTest'
import { useState, useEffect } from 'react';
export default function SearchResults() {
  const [arr, setArr] = useState([])

  const getSubject = async () => {
    const res = await getData();
    // console.log(res);
    setArr(res)
  }

  useEffect(() => {
    getSubject();
  }, [])
  console.log(arr);

  return (
    <>
      <div className={styles.container}>
        {

          arr.map((item, index) => (
            <ul key={index}>
              <li className={styles.title}>{item.name}</li>
            </ul>
          ))
        }



      </div>
    </>
  )
}
