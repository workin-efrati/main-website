import style from './style.module.scss'
import CarouselVideos from '@/components/CarouselVideos'
import data from './data.json'
function page() {
    return (<>
        <div className={style.page}>
       <CarouselVideos videos={data}/>
        </div>
    </>)
}
export default page