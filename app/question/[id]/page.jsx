import { ShareLinks } from '@/components/ShereLinks';
import styles from './style.module.scss'
import Text from '@/components/TextComponent/index.jsx';
import { BsTags } from "react-icons/bs";

import Tag from '@/components/Tag';
import { FontSizeAdjuster } from '@/components/FontSizeAdjuster';
import { unstable_noStore } from 'next/cache';
// export const generateStaticParams = async () => {
//   await connectToMongo();
//   const res = await readQuestionsService();
//   return res.map((question) => ({ question: question.title }));
// };

const question = {
    title: 'הרתחת מיחם לאחר הפסקת חשמל',
    tags: ["שבת", "הבערה", "הפסקת חשמל", "שבת", "הבערה", "הפסקת חשמל", "שבת", "הבערה"],
    q: `שלום וברכה הרב,
  
  משפחה שמתגוררת בחו"ל, והיה להם הפסקת חשמל מספר פעמים בערב שבת. הם ידעו שהחשמל יחזור בשבת.
  
  השאלה היא האם מותר להניח מיחמים שבהם מים קרים כך שכשיחזירו את החשמל המים ירתחו.
  
  האם מותר לעשות זאת לכתחילה? והאם מי שכבר עשה כך מותר לו לשתות מהמים החמים בדיעבד?
  
  יש לציין שלרוב המיחמים פה אין אפשרות לשנות את גובה האש.
  
  ולמיעוטם יש רק כפתור אחד להרתיח מחדש אם ירצו וזה לא פועל בשעת עצם הבישול.
  
  תודה מראש.`,
    a: `יש בזה ג' צדדים - הבערה, מחזי כמבשל, ובישול.
  
  לגבי בישול, אם המים כבר הגיעו לרתיחה קודם שבת, והוסרו והתקררו, ומבשלים אותם שוב בשבת, יש להתיר בזה כמאן דאמר מים מצטמק ורע לו, ובצירוף שיטת הרמב"ם שאין בישול אחר בישול בלח.
  
  לגבי הבערה, זו גרמא בדאורייתא ולכן אסור.
  
  לגבי מחזי כמבשל, גם זה אסור.
  
  לכן אין לחבר את המיחם עם המים לשקע, אף שהיו מבושלים קודם שבת.
  
  אולם מיחם שהיה רותח ומחובר בשבת, והיה קצר, והמים התקררו, ושבו והתחממו בשל הגוי שתיקן לעיר הגויים, והמיחם לא זז כל השבת מראשיתה, המים מותרים.`
}



export default async function Question({ params: { id } }) {
    unstable_noStore()
    //   await connectToMongo();
    //   const result = await readQuestionsService({ _id: decodeURI(id) });
    return (
        <>
            <div className={styles.header}>
                <Text as={'h2'} fontStyle={'b'}> {question.title} </Text>
            </div>
            <FontSizeAdjuster>
                <div className={styles.container}>
                    <div className={styles.question}>
                        <div className={styles.questionHeader}>
                            <Text as={'h3'} fontStyle={'b'}> שאלה </Text>
                        </div>
                        <Text fontStyle={'b'} className={styles.textContainer}> {question.q} </Text>
                    </div>
                    <div className={styles.tags}>
                        <BsTags className={styles.tagIcon} />
                        {question.tags.map(tag => <Tag name={tag} path={tag} />)}
                        <div className={styles.line}></div>
                    </div>
                    <div className={styles.answer}>
                        <div className={styles.answerHeader}>
                            <Text as={'h3'} fontStyle={'b'} > תשובה </Text>
                        </div>
                        <Text fontStyle={'b'} className={styles.textContainer}> {question.a} </Text>
                    </div>
                    <div className={styles.links}> <ShareLinks /> </div>

                </div>
            </FontSizeAdjuster>
        </>
    );
}
