'use client'
import styles from './style.module.scss'
import { useParams, usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";
export default function FilterVideos({search}) {
  const router = useRouter()
  useEffect(()=>{
    router.push(`/videos`)
  },[])
   const handleFilter = (e)=>{
    if (!search) search = ""
router.push(`/videos/?filter=${e.target.value}&search=${search}`)
   }
  return (
    <div>
      <select className={styles.select} name="" id="" onChange={handleFilter}>
        <option value="כל השיעורים">הכל</option>
        <option value="פרשת שבוע">פרשת שבוע</option>
        <option value="חגים ומועדים">חגים ומועדים</option>
        <option value="תהילים">תהילים</option>
        <option value="ספר שמואל">ספר שמואל</option>
        <option value="תשובה">תשובה</option>
        <option value="אחר">אחר</option>
      </select>
    </div>
  );
}
