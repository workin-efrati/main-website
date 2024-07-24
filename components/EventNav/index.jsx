import styles from './style.module.scss'
import { data } from './data';
import Link from 'next/link';
export default function EventNav({ }) {
  function ArticleContainer({ _id, title, content , href}) {
    return (
      <>
        <Link href={href} key={_id} className={styles.article}>
          <h3>{title}</h3>
          {content && <p>{content}</p>}
        </Link>
      </>
    )
  }
  return (
    <div className={styles.EventNav}>
      <h2>{data().event}</h2>
      <div className={styles.container}>
        {data().articles.map(a => <ArticleContainer {...a} />)}
      </div>
      <div className={styles.container}>
        {data().qa.map(a => <ArticleContainer {...a} />)}
      </div>
    </div>
  )
}
