'use client'
import styles from './style.module.scss'
// import { data } from './data';
import Link from 'next/link';
import useAxiosReq from '@/hooks/useAxiosReq';
export default function EventNav({ }) {
  // TODO - handle loading and error
  const { data, error, loading } = useAxiosReq({ url: 'question/daily', isLocalServer: true })
  const nextHoliday = data?.upcomingHoliday?.[0]
  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>


  function ArticleContainer({ _id, title, question, answer, img, tags = [] }) {
    return (
      <>
        <Link href={`question/${_id}`} className={styles.article}>
          <h3>{title || tags[0]?.name || 'שאלה'}</h3>
          {question && <p>{question}</p>}
        </Link>
      </>
    )
  }
  return (
    <>
      {!loading ?
        <div className={styles.EventNav}>
          <h2>{`${nextHoliday?.name || ''}`}</h2>
          {/* <div className={styles.container}>
        {data().articles.map((a, i) => <ArticleContainer key={i} {...a} />)}
      </div> */}
          <div className={styles.container}>
            {nextHoliday?.q?.map?.((a, i) => <ArticleContainer key={i} {...a} />)}
          </div>
        </div> :
        <div>Loading...</div>}
    </>
  )
}
