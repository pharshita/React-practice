import React from 'react'

export default function State(props) {
  const a = "welcome user"

  return (
    <div>
      <h1>{props.data}</h1>
      <button onClick={() => props.getitem(a)}>Click me</button>

    
    </div>
  )
}
