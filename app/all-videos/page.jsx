
import style from './style.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import SearchVideos from '@/components/SearchVideos'
import { connect } from '@/server/connect'
import { readVidoes } from '@/server/services/vod.service'

export async function generateStaticParams() {
    await connect()
    const all = await readVidoes()
    return all.map((vid) => ({ id: String(vid._id) }))
}


async function page({ searchParams: { search } }) {
    await connect()
    const data = await readVidoes(search)
    return (<>
        <div className={style.page}>
            <div>
                <SearchVideos />
            </div>
            <div className={style.holdVideos}>
                {data?.map((v, i) =>
                    <Link key={v._id}
                        className={style.card}
                        href={`/all-videos/${v._id}`}><Image
                            className={style.img}
                            src={v.img}
                            fill
                            alt="image"
                            sizes={"100%"}
                            priority={1} />
                        <div className={style.title}>{v.title}</div>
                    </Link>)}
            </div>
        </div>
    </>)
}
export default page