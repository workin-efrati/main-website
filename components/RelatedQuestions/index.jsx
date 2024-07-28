import Link from "next/link";
import style from "./style.module.scss";
import { connect } from "@/server/connect";
import { relatedQues } from "@/server/services/qa.service";
export default async function RelatedQuestions({ ...q }) {
  await connect();
  const questions = await relatedQues(q);
  console.log({q});

  return (
    <>
      <div>
        <div className={style.title}>שאלות קשורות</div>
        <div className={style.holdQues}>
          {questions.map((q) => {
            return (
              <Link href={q?._id} className={style.ques}>
                <p className={style.titleQues}>{q?.title}</p>
                <p className={style.q}> {q?.question}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
