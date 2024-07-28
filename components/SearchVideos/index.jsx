'use client'

import { useRouter } from "next/navigation"
import style from './style.module.scss'

function SearchVideos() {
    const router = useRouter()

    const handleSearch = e => {
        router.push(e.target.value ? `/videos/?search=${e.target.value}` : `/videos`)
    }

    return (<>
        <div className={style.holdInput}>
            <input onChange={handleSearch} type="text" />
        </div>
    </>)
}
export default SearchVideos