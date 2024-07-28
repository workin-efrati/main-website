import { ShareLinks } from '@/components/ShereLinks';
import styles from './style.module.scss'
import Text from '@/components/TextComponent/index.jsx';
import { BsTags } from "react-icons/bs";
import Tag from '@/components/Tag';
import { FontSizeAdjuster } from '@/components/FontSizeAdjuster';
import { connect } from '@/server/connect';
import { readOneQaService, readQaService } from '@/server/services/qa.service';

export const generateStaticParams = async () => {
    await connect();
    const res = await readQaService();
    return res.map((question) => ({ params: { id: question._id } }));
};

const question = {
    title: 'הרתחת מיחם לאחר הפסקת חשמל',
    tags: ["שבת", "הבערה", "הפסקת חשמל", "שבת", "הבערה", "הפסקת חשמל", "שבת", "הבערה"],
}



export default async function Question({ params: { id } }) {
    await connect();
    const result = await readOneQaService({ _id: id });

    return (
        <>
            <div className={styles.header}>
                <Text as={'h2'} fontStyle={'b'}> {result.title || 'שאלו את הרב'} </Text>
            </div>
            <FontSizeAdjuster>
                <div className={styles.container}>
                    <div className={styles.question}>
                        <div className={styles.questionHeader}>
                            <Text as={'h3'} fontStyle={'b'}> שאלה </Text>
                        </div>
                        <Text fontStyle={'b'} className={styles.textContainer}> {result?.question} </Text>
                    </div>
                    <div className={styles.tags}>
                        <BsTags className={styles.tagIcon} />
                        {result?.tags.map(tag => <Tag key={tag._id} name={tag.name} path={`/category/${tag._id}`} />)}
                        <div className={styles.line}></div>
                    </div>
                    <div className={styles.answer}>
                        <div className={styles.answerHeader}>
                            <Text as={'h3'} fontStyle={'b'} > תשובה </Text>
                        </div>
                        <Text fontStyle={'b'} className={styles.textContainer}> {result?.answer} </Text>
                    </div>
                    <div className={styles.links}> <ShareLinks /> </div>

                </div>
            </FontSizeAdjuster>
            <RelatedQuestions id={id}/>
        </>
    );
}
