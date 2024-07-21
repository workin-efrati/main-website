"use client"

import useAxiosReq from '@/hooks/useAxiosReq'
import React, { useEffect } from 'react'

const page = () => {
const {data, loading, error, fetchData}= useAxiosReq({ defaultVal: [{name: "ya'akov"}], method:"GET", url:  "customers/668511da39dbaad18f7eb541"  ,body: {}, isLocalServer: true })
 useEffect(()=>{
    console.log(data)
 }, [data])


  return (
    <div>
        <h1>Customer</h1>
        <h2>{data && <>"afsdfsdfgdsgdfg"</>}</h2>
        {/* <h2>{error && {error}}</h2> */}
      
    </div>
  )
}

export default page
