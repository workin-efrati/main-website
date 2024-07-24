import AskQuestionForm from '@/components/AskQuestionForm'
import styles from './style.module.scss'
import Text from '@/components/TextComponent'
import React from 'react'
import Image from 'next/image'

export const metadata = {
    title: "Ask the rabbi",
    description: "Ask the rabbi",
};



const page = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <Image src={"https://www.kipa.co.il/userFiles/8abc8a31b441a9113106e6e26c79727e.jpg"} alt=""
                    width={0}
                    height={0}
                    sizes="100vw"
                    className={styles.backImg}
                />
                <Text as="h1" textColor="white" fontStyle="b">שאל את הרב</Text>
            </div>


            <div className={styles.iframe}>
                <AskQuestionForm />
            </div>
       
        </div>

    )
}

export default page






