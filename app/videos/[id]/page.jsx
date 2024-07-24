
import styles from './style.module.scss'
import ButtonFullScreen from './ButtonFullScreen'
import { videos } from './data'
import Image from 'next/image';
import Text from '@/components/TextComponent';

// video/1
// video/2
// video/3

// TODO - generate static params
// TODO - generate metadata


const Video = ({ params: { id } }) => {
    
    const { title, description, link } = videos[0]
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <Image src={"https://www.kipa.co.il/userFiles/8abc8a31b441a9113106e6e26c79727e.jpg"} alt="dssdf"
                    fill
                    sizes="100vw"
                    className={styles.backImg}
                />
                <Text newClass={styles.j} as="h1" textColor="white" fontStyle="b">{title}</Text>
            </div>
            <div className={styles.iframe}>
                <iframe width="100%"
                    height="100%"
                    src={link}
                    title={description}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen>

                </iframe>
            </div>
            <ButtonFullScreen />
        </div>
    )
}

export default Video
