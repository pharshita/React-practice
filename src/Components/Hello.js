import React, { Fragment } from 'react'

export default function Hello(props) {
    const user="harshita"
    // const name={
    //     name:"Harshita",
    //     sname:"patidar",
    //     age:23
    // }
    let code = "React"

  return (
      <Fragment>
          <h1 contentEditable="true">my name is {user}</h1>
          {/* <div>Hello {props.name}</div>
          <h1>{2+3}</h1>
          <h2>{code}</h2> */}
         
        {/* <div>Hello {name.name} {name.sname} {name.age}</div> */}
      </Fragment>
  )
}


