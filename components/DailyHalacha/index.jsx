import { data } from './data'
import styles from './style.module.scss' 

export default function DailyHalacha(){
  return (
<div className={styles.DailyHalacha}>
<h2>הלכה יומית</h2>
<h3>{data().title}</h3>
<div className={styles.containerQAndA}>
<div className={styles.sectionContainer}>
  <h4>שאלה</h4>
  <p>{data().q}</p>
</div>
<div className={styles.sectionContainer}>
  <h4>תשובה</h4>
  <p>{data().a}</p>
</div>

</div>
</div>
  )
}
