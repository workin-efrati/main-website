import Image from 'next/image'
import style from './style.module.scss'
import Link from 'next/link'
// [{text:"",image:"",link:""},{},{}]
function CarouselVideos({ videos }) {
    return (
        <div className={style.holdVideos}>
            {videos.map((i, n) =>
                <div key={n} className={style.holdCard}>
                    <Link href={i._id.toString()}>
                        <Image
                            alt="image"
                            width={400}
                            height={300}
                            className={style.image}
                            src={i.img}
                        />
                        <div className={style.text}>{i.title}</div>
                    </Link>
                </div>
            )}
        </div>
    )
}
export default CarouselVideos
