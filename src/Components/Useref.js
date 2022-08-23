import React, { useRef, useState } from 'react'

export default function Useref() {
const[show,setshow]=useState(false)
    const myname=useRef(null)
    const submitform=(e)=>{
        e.preventDefault();
        let name=myname.current.value
        name===""?alert("pls enter value"):setshow(true)

    }
  return (
    <>
    <form onSubmit={submitform}>
        <input type="text" placeholder='Enter your name' id="myname" ref={myname} autoComplete="off"></input>
        <button> submit</button>
    </form>
    <p>
    {
        show ? `your name is ${myname.current.value}` : ""
    }
    </p>
    </>
  )
}
