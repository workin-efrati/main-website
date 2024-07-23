import styles from './style.module.scss'
import { data } from './data';
export default function EventNav({ }) {
  function ArticleContainer({ _id, title, content , href}) {
    return (
      <>
        <a href={href} key={_id} className={styles.article}>
          <h3>{title}</h3>
          {content && <p>{content}</p>}
        </a>
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
