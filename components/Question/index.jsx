import Link from "next/link";
import styles from "./style.module.scss";
export default function Question({ to, question, answer }) {
  return (
    <Link className={styles.question} href={`/question/${to}`}>
      <div>
        <span>שאלה : </span>
        <p>{question.slice(0, 30)}</p>
      </div>
      <div>
        <span>תשובה : </span>
        <p>{answer.slice(0, 30)}</p>
      </div>
    </Link>
  );
}
