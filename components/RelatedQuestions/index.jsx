
import Link from 'next/link'
import style from './style.module.scss'
import { connect } from '@/server/connect'
import { relatedQues } from '@/server/services/qa.service'
export default async function RelatedQuestions({ q }) {
    const c = {
        _id: "66a11951fa2e12e9e83cce8e",
        title: "ש",
        tags: ["66a0bfa67076bd7d8303600c","66a0bfa47076bd7d83035ecc"]
    }
    await connect()
    const questions = await relatedQues(c)
    // console.log(questions);
    return (<>
        <div>
            <div className={style.title}>
                שאלות קשורות
            </div>
            <div className={style.holdQues}>
                {questions.map(q => {
                    return (
                        <Link href={q?._id} className={style.ques}>
                            <p className={style.titleQues}>{q?.title}</p>
                            <p className={style.q}> {q?.question}</p>
                        </Link>
                    )
                })}
            </div>
        </div>
    </>)
}