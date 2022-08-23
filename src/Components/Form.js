import React, { useState } from 'react'

export default function Form() {
  const [name, setname] = useState("")
  const [fullname, setfullname] = useState("")
  const inputevents = (e) => {
    setname(e.target.value)
  }

  const submitVal = (e) => {
    setfullname(name)
    if(name){
      setname(e.target.value)
    }else{
      setname("")
    }
  }
  return (
    <div>
      <h1>Hello {fullname}</h1>
      {/* <label>Name: <input></input></label> */}
      <input type="text" placeholder='Enter your name' onChange={inputevents} value={name} ></input>
      <button onClick={submitVal}>Submit</button><br/>

      {/* <textarea>
        Hello there, this is some text in a text area
      </textarea> */}

<select>
  <option value="grapefruit">Grapefruit</option>
  <option value="lime">Lime</option>
  <option selected value="coconut">Coconut</option>
  <option value="mango">Mango</option>
</select>


    </div>
  )
}
