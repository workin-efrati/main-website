import Link from "next/link";
import styles from "./style.module.scss";
export default function Question({ to, question, answer, title = 'שאלה' }) {
  return (
    <Link className={styles.question} href={`/question/${to}`}>
      <h3> {title} </h3>
      <p  >
        {question}
      </p>
      {/* <div>
        <span>תשובה : </span>
        <p>{answer.slice(0, 30)}</p>
      </div> */}
    </Link>
  );
}
