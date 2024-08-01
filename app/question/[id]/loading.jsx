import React from 'react'
import styles from './loader.module.scss'

export default function loading() {
  return (
    <>
      <div className={styles.headerLoader}> </div>

        <div className={styles.containerLoader}>

          <div className={styles.questionLoader}>
            <div className={styles.questionHeaderLoader}></div>
            <div className={styles.textContainer}>
              {Array(6).fill('q').map((line, index) => (
                <div key={index} className={styles.textLine}></div>
              ))}
            </div>
          </div>
          <div className={styles.tagsLoader}>
            {Array(3).fill('q').map((line, index) => (
              <div key={index} className={styles.tag}></div>
            ))}
          </div>
          <div className={styles.lineLoader}></div>
          <div className={styles.questionLoader}>
            <div className={styles.questionHeaderLoader}></div>
            <div className={styles.textContainer}>
              {Array(6).fill('q').map((line, index) => (
                <div key={index} className={styles.textLine}></div>
              ))}
            </div>
          </div>

        </div>
        <div className={styles.headerLaoder} ></div>
        <div className={styles.content} ></div>
    </>
  )
}
