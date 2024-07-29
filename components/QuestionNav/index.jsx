'use client'
import styles from './style.module.scss'
import data from "./qData.json"
import Image from 'next/image';
import Link from 'next/link';
import useAxiosReq from '@/hooks/useAxiosReq';

export default function QuestionNav() {
    // TODO - handle loading and error
    const { data: arr = [], error, loading } = useAxiosReq({ url: 'question/random', isLocalServer: true })

    return (
        <div className={styles.QuestionNav}>
            <h2>שאלות פופולריות</h2>
            <div className={styles.QuestionNavContainer}>
                {arr?.map((q, i) => (
                    <Link key={"a" + q._id} href={`/question/${q._id}`} className={styles.questionRow}>
                        <div className={styles.imgContainer}>
                            <Image width={200} height={200} src={q.img?.[0] || data[i]?.img || '/book.svg'} alt={q.title || 'img'} />
                            <div className={styles.tag}>{q.tag}</div>
                        </div>
                        <div className={styles.titleAndTextContainer}>
                            <h4>{q.title || q.tags?.[0]?.name}</h4>
                            <p>{q.question}</p>
                        </div>
                    </Link>
                ))}
                <div className={styles.toAllQuestion}><Link href="">לשאלות פופלריות נוספות</Link> </div>
            </div>
        </div>
    )
}
