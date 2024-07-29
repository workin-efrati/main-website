import SearchQuestions from '@/components/SearchQuestions'
import Text from '@/components/TextComponent'
import Image from 'next/image'
import styles from './style.module.scss'
import { Suspense } from 'react';

export const metadata = {
    title: "תוצאות חיפוש",
    description: "שאלות בהלכה ושאלות באמונה לבני נוער ונושאים שונים ביהדות",
};



const Page = () => {

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <Image
                    src={"https://www.kipa.co.il/userFiles/8abc8a31b441a9113106e6e26c79727e.jpg"}
                    alt="hero"
                    fill
                    className={styles.backImg}
                />
                <Text as="h1" textColor="white" fontStyle="b">שאל את הרב</Text>
            </div>

            <Suspense fallback={<div>Loading...</div>}>
                <div className={styles.form}>
                    <SearchQuestions />
                </div>
            </Suspense>
        </div>
    )
}

export default Page






