import { relatedQues } from "@/server/services/qa.service";
import Link from "next/link";
import styles from "./style.module.scss";
import { create } from "@/server/controller/playlist.controller";

export default async function RelatedQuestions({ ...q }) {
  const questions = await relatedQues(q) || [];

  return (
    <>
      <div className={styles.title}>שאלות קשורות</div>
      <div className={styles.holdQues}>
        {questions.map((q, i) => {
          return (
            <Link href={`${q._id.toString()}`} key={q._id} className={styles.ques}>
              <p className={styles.titleQues}>{q?.title || `${q.tags?.[0]?.name}`}</p>
              <p className={styles.q}> {q?.question}</p>
            </Link>
          );
        })}
      </div>
    </>
  );
}
