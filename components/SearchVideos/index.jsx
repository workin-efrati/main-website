'use client'

import { useRouter } from "next/navigation"

function SearchVideos() {
    const router = useRouter()
    const handleSearch = e =>{
        if (e.target.value) {
            router.push(`/allVideos/?search=${e.target.value}`)
        }
        else{
            router.push(`/allVideos`)
        }
    }
    return(<>
    <div>
<input onChange={handleSearch} type="text" />
    </div>
    </>)
}
export default SearchVideos