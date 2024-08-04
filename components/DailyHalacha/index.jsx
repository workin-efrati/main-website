"use client"

import styles from './style.module.scss'
import useFetchReq from '@/hooks/useFetchReq'

export default function DailyHalacha() {
  // TODO - read only one question from table of daily questions and popular

  const { data = [], loading, error } = useFetchReq({
    url: 'question/random?limit=1', method: 'GET', isLocalServer: true,
    optionsNext: { cache: 'force-cache' }
  })
  const question = data[0] || {}

  return (
    <section className={styles.DailyHalacha}>
      <h2>הלכה יומית</h2>
      <h3  className={loading? styles.loading : ''} >{question.title || question.tags?.[0]?.name}</h3>
      <div className={styles.containerQAndA}>
        <div className={styles.sectionContainer}>
          <h4>שאלה</h4>
          <p className={loading? styles.loading : ''} >{question.question}</p>
        </div>
        <div className={styles.sectionContainer}>
          <h4>תשובה</h4>
          <p className={loading? styles.loading : ''} >{question.answer}</p>
        </div>
      </div>
    </section>
  )
}
