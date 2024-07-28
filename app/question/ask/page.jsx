import AskQuestionForm from '@/components/AskQuestionForm'
import Text from '@/components/TextComponent'
import Image from 'next/image'
import styles from './style.module.scss'

export const metadata = {
    title: "שאל את הרב",
    description: "לשליחת שאלות לרב אפרתי",
};

const img = 'https://www.kipa.co.il/userFiles/8abc8a31b441a9113106e6e26c79727e.jpg'

const page = async () => {
    // let q = await getRelevantQuestions()
    // console.log(q)

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <Image src={img} alt="ask the rabbi" fill className={styles.backImg} />
                <Text as="h1" textColor="white" fontStyle="b">שאל את הרב</Text>
            </div>
            <div className={styles.form}>
                <AskQuestionForm />
            </div>
        </div>

    )
}

export default page





