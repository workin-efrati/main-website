
import style from './style.module.scss'
import data1 from './data.json'
import Link from 'next/link'
import Image from 'next/image'
import SearchVideos from '@/components/SearchVideos'
function page({searchParams:{search}}) {
const  data = data1.filter(d => d.title.includes(search))
return (<>
    
        <div className={style.page}>
            <div>
         <SearchVideos/>
            </div>
            <div className={style.holdVideos}>
                {data?.map(v => <Link key={v.image}  className={style.card} href={v.link}><Image className={style.img} src={v.img}  fill alt="image" priority={1}/>
                <div className={style.title}>{v.title}</div>
                </Link>)}
            </div>
        </div>
    </>)
}
export default page