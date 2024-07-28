
import styles from './style.module.scss'
import ButtonFullScreen from './ButtonFullScreen'
import Text from '../TextComponent'
import { videos } from './data'
import Image from 'next/image';
export const metadata = {
    
    title:"שיעור פרשת קורח",
    description: videos[0],
    icons: {
        icon: '/metaDataIcon.svg',
      },
    
  };

const Video = () => {
    const { title, description, link } = videos[0]
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <Image src={"https://www.kipa.co.il/userFiles/8abc8a31b441a9113106e6e26c79727e.jpg"} alt="dssdf"
                width={0}
                height={0}
                sizes="100vw"
                className={styles.backImg}
               />
                <Text as="h2" textColor="white" fontStyle="b">{title}</Text>
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
