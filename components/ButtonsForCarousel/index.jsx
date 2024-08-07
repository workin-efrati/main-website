"use client"
import { useState } from 'react'
import styles from './style.module.scss'
export default function ButtonsForCarousel({children , vidLenght}) {
    const [move ,setMove] = useState(0)
    const [lengthVideo ,setLengthVideo] = useState(0)
    const handleLeft =()=>{
        if (lengthVideo == 0 )  return         
        setLengthVideo(lengthVideo + 1)
        setMove(p=>(p-420))
        return 
    }
    const handleRight =()=>{
        if (-vidLenght == (lengthVideo - 4))  return         
        setLengthVideo(lengthVideo - 1)
        setMove(p=>(p+420))
        return 
    }
  return (
    <div>
            <button onClick={handleRight} className={styles.right}>{"<"}</button>
            <button onClick={handleLeft} className={styles.left}>{">"}</button>
            <div className={styles.holdVideos} >
                <div className={styles.move} style={{transform:`translateX(${move}px)`}}>
            {children}
                </div>
            </div>
    </div>
  )
}
