'use client'
import styles from './style.module.scss'
// import { data } from './data';
import Link from 'next/link';
import useAxiosReq from '@/hooks/useAxiosReq';
export default function EventNav({ }) {
  // TODO - handle loading and error
  const { data, error, loading } = useAxiosReq({ url: 'question/daily',  isLocalServer: true })
  console.log(data)
  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>
 

  function ArticleContainer({ _id, title, question , answer, img, tags}) {
    return (
      <>
        <Link href={`question/${_id}`} className={styles.article}>
          <h3>{title}</h3>
          {question && <p>{question}</p>}
        </Link>
      </>
    )
  }
  return (
   <>
    {!loading ?
     <div className={styles.EventNav}>
      <h2>{`${data?.upcomingHoliday[0]?.name}` }</h2>
      {/* <div className={styles.container}>
        {data().articles.map((a, i) => <ArticleContainer key={i} {...a} />)}
      </div> */}
      <div className={styles.container}>
        {data?.upcomingHoliday[0]?.q?.map((a, i) => <ArticleContainer key={i} {...a} title={"עדיין אין כותרות"}/>)}
      </div>
    </div>:
  <div>Loading...</div>}
   </>
  )
}
