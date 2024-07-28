import styles from './styles.module.scss';
import React from 'react'

export default function Loading() {
    const faceTags = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    return (
        <div className={styles.container}>
            {faceTags.map((item, index) => {
              return  <div key={index} className={styles.item} />
            })}
        </div>
    )
}
