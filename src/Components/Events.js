import React, { useState } from 'react'

export default function Events() {
    const purple= "#cb54d1"
    const[bg,changebg]=useState(purple)
    const[name,setname]=useState("click me")

    
    const bgchange=()=>{
        let newbg="#eb4034"
    changebg(newbg)
    setname("welcome")
    }
    const bgback=()=>{
        changebg(purple)
        setname("back to page")

    }

    function handleSubmit(e) {
      e.preventDefault();
      alert('You clicked submit.');
    }

  return (
    <div style={{backgroundColor:bg,height:"400px"}}>
        {/* <button onMouseEnter={bgchange} onMouseLeave={bgback}>{name}</button> */}
        <button onClick={bgchange} onDoubleClick={bgback}>{name}</button>

        <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </form>
        
    </div>
  )
}
