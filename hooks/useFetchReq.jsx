"use client"

import { fetchReq } from '@/helpers/fetchReq'
import { useEffect, useState } from 'react'

export default function useFetchReq({
    method = 'GET',
    body,
    url,
    isLocalServer,
    headers,
    params,
    optionsNext
}) {
    const [data, setData] = useState()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const fetchData = async () => {
        setLoading(true)
        try {
            const result = await fetchReq({ body, url, headers, isLocalServer, method, params, optionsNext })
            setData(result)
        } catch (e) {
            setError(e)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return { data, loading, error, fetchData }
}