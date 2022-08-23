import React, { useState } from 'react'

export default function Toggle() {
    const[name,setname]=useState("Harshita patidar")

    const changename = ()=>{
      let val=name;
      if(val==="Harshita patidar"){
          setname("Welcome to my page")
      }else{
        setname("Harshita patidar")

      }
    }
  return (
    <div>
        <h1>{name}</h1>
        <button onClick={changename}>Click</button>
    </div>
  )
}
