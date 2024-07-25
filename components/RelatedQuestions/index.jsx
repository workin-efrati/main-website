
import Link from 'next/link'
import style from './style.module.scss'
import { connect } from '@/server/connect'
export default function RelatedQuestions({id}) {

connect

    return(<>
    <div>
<div className={style.title}>
    שאלות קשורות
</div>
<Link href={'/'} className={style.holdQues}>
<div className={style.ques}>
    <p className={style.q}>האם להתקשר ולידע את חברת חשמל על התקלה בשבת?</p>
    <p className={style.a}>  aliquid excepturi quae. Debitis ara. בדרך כלל לא ת חברת חשמל משהה על מסכי מחשב שיש תקלה , והיא פועלת לתיקון גם בשבת לעיתים כאשר יש תקלה aliquid excepturi quae. Debitis ara. בדרך כלל לא ת חברת חשמל משהה על מסכי מחשב שיש תקלה , והיא פועלת לתיקון גם בשבת לעיתים כאשר יש תקלה aliquid excepturi quae. Debitis ara. בדרך כלל לא ת חברת חשמל משהה על מסכי מחשב שיש תקלה , והיא פועלת לתיקון גם בשבת לעיתים כאשר יש תקלה aliquid excepturi quae. Debitis ara. בדרך כלל לא ת חברת חשמל משהה על מסכי מחשב שיש תקלה , והיא פועלת לתיקון גם בשבת לעיתים כאשר יש תקלה</p>
</div>
<div className={style.ques}></div>
<div className={style.ques}></div>
</Link>
    </div>
    </>)
}