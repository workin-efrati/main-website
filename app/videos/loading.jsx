import React from 'react'
import styles from './style.module.scss'
export default function loading() {
  return (
    <div className={styles.holdVideos}>
        {Array(35).fill('q').map((line, index) => (
                 <div className={styles.loadingCard}></div>
              ))}
    </div>
  )
}
