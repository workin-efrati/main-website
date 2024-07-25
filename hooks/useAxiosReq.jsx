"use client"

import { useEffect, useState } from 'react'
import {axiosReq} from "@/helpers/axiosReq.js"

export default function useAxiosReq({ method = "GET", url, body, isLocalServer }) {
    const [data, setData] = useState()
    // טעינה בעת המתנה למידע
    const [loading, setLoading] = useState(false)
    // שגיאה
    const [error, setError] = useState('')
    // בקשת מידע
    const fetchData = async () => {
        // התחלת אפקט טעינה
        setLoading(true)
        try {
            const result = await axiosReq({ method, url, body, isLocalServer })
            setData(result)
        } catch (e) {
            setError(e)
        } finally {
            // הפסקת אפקט טעינה
            setLoading(false)

        }
    }

    // הפעלת קריאה
    useEffect(() => {
        fetchData()
    }, [])

    return { data, loading, error, fetchData }
}


