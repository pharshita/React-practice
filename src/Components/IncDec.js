import React, { useState } from 'react'

export default function IncDec() {
    const[count,setcount]=useState(0)
   
    
    const increament=()=>{
        setcount(count+1)
    }
    const Decreament=()=>{
        setcount(count-1)
    }
  return (
    <div>
        <button onClick={increament}>+</button>
        <h1>{count}</h1>
        <button onClick={Decreament}>-</button>

    </div>
  )
}
