import SearchQuestions from '@/components/SearchQuestions'
import Text from '@/components/TextComponent'
import Image from 'next/image'
import styles from './style.module.scss'

export const metadata = {
    title: "Ask the rabbi",
    description: "Ask the rabbi",
};



const page = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <Image src={"https://www.kipa.co.il/userFiles/8abc8a31b441a9113106e6e26c79727e.jpg"} alt=""
                    fill
                    
                    className={styles.backImg}
                />
                <Text as="h1" textColor="white" fontStyle="b">שאל את הרב</Text>
            </div>

            <div className={styles.form}>
                <SearchQuestions />
            </div>
       
        </div>

    )
}

export default page






