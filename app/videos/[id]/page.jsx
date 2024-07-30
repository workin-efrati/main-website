
import styles from './style.module.scss'
import ButtonFullScreen from './ButtonFullScreen'
import { videos } from './data'
import Image from 'next/image';
import Text from '@/components/TextComponent';
import { connect } from '@/server/connect';
import { readOneVideo, readVideos } from '@/server/services/vod.service';
import Link from 'next/link';

export async function generateStaticParams() {
    await connect()
    const all = await readVideos()
    return all.map((vid) => ({ id: String(vid._id) }))
}

export async function generateMetadata({ params : {id} }) {
    await connect()
    const data = await readOneVideo({ _id: id })
    const { title } = data
    return {
      title,
      description : "שיעורי וידאו הרב אפרתי"
    }
  }

const Video = async ({ params: { id } }) => {
    await connect()
    const data = await readOneVideo({ _id: id })
    const { title, description, link, img } = data

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <Image src={img} alt="dssdf"
                    fill
                    sizes="100vw"
                    className={styles.backImg}
                />
                <Text newClass={styles.j} as="h2" textColor="white" fontStyle="b">{title}</Text>
            </div>
            <div className={styles.iframe}>
                <iframe width="100%" 
                    height="100%"
                    src={`https://www.youtube.com/embed/${link.replace("/watch?v=", '')}`}
                    title={description}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    >
                </iframe>
            </div>
            <ButtonFullScreen />
            <Link className={styles.btnBackToVideos} href={'/videos'}>חזור לתפריט</Link>
        </div>
    )
}

export default Video
