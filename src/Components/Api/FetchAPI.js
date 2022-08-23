import React, { useEffect, useState} from 'react'
import axios from 'axios'

export default function FetchAPI() {
    const[data1,setdata]=useState("")

   useEffect(()=>{
       axios.get("https://croma.api.cashify.in/v1/get-all-products-price?pincode=400049").then((res)=>{
           setdata(res.data)
       }).catch((err)=>{
           console.log(err)
       })
   },[])
   console.log(data1)
  return (
    <div>
        FetchAPI
    </div>
  )
}
