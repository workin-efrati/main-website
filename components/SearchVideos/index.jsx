'use client'

import { useRouter } from "next/navigation"
import style from './style.module.scss'
function SearchVideos() {
    const router = useRouter()
    const handleSearch = e =>{
        if (e.target.value) {
            router.push(`/all-videos/?search=${e.target.value}`)
        }
        else{
            router.push(`/all-videos`)
        }
    }
    return(<>
    <div className={style.holdInput}>
<input onChange={handleSearch} type="text" />
    </div>
    </>)
}
export default SearchVideos