'use client'
import styles from './style.module.scss'
import data from "./qData.json"
import Image from 'next/image';
export default function QuestionNav({ arr }) {
    console.log(data);
    arr = data || arr || []
    return (
    <div className={styles.QuestionNav}>
        <h2>שאלות פופולריות</h2>
        <div className={styles.QuestionNavContainer}>
            {arr?.map(q => (
                <a key={"a" + q._id} href={q.href} className={styles.questionRow}>
                    <div className={styles.imgContainer}>
                        <Image width={100} height={100} src={q.img} alt={q.title} />
                        {/* <img width={100} height={100} src={q.img} alt={q.title} /> */}
                        <div className={styles.tag}>{q.tag}</div>
                    </div>
                    <div className={styles.titleAndTextContainer}>
                        <h4>{q.title}</h4>
                        <p>{q.text}</p>
                    </div>
                </a>
            ))}
            <div className={styles.toAllQuestion}><a href="">לשאלות פופלריות נוספות</a> </div>
        </div>
    </div>
    )
}
