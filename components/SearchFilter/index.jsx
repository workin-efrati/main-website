"use client"
import styles from './styles.module.scss'
import { FaSearch } from "react-icons/fa";
import { useState } from 'react';
export default function SearchFilter() {
  const [typeInput, setTypeInput] = useState(false)

  return (
    <div className={styles.container}>
      {!typeInput ?

        <div className={styles.buttons}>

          <button className={styles.subjectSearch} onClick={()=>setTypeInput("נושאים")}>
            סינון לפי נושא
          </button>
          <div className={styles.line}>

          </div>
          <button className={styles.freeSearch} onClick={()=>setTypeInput("חיפוש ")}>
            טקסט חופשי
          </button>
        </div> :
        <div className={styles.search}>

          <button className={styles.subjectSearch} >
            { typeInput}
            
          </button>
          <div className={styles.line} >
          </div>


          <input ></input>
        </div>
      }
      <div className={styles.icon} onClick={()=>{setTypeInput(false)}}>
        <FaSearch />

      </div>

    </div>
  )
}
