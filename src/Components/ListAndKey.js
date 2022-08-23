// import React from 'react'

// function Car(props){
//     return <li>I am a {props.brand} </li>
// }
// export default function ListAndKey() {
//    const cars=["Ford","Vanue","audi","BMW"]
//   return (
//     <div>
//         <h1>My Cars</h1>
//         <ul>{cars.map((i)=><Car brand={i}/>)}</ul>

//     </div>
//   )
// }

import React from 'react'
function Car(props){
    return<li>{props.brand}</li>
}

export default function ListAndKey() {

    const Cars=[
       {id:1 ,brand:"Ford"},
       {id:2 ,brand:"vanue"},
       {id:3 ,brand:"Audi"},
       {id:4 ,brand:"BMW"}
    ]
  return (
    <div>
        <h1>My Cars</h1>
        <ul>{Cars.map((i)=><Car Key={i.id} brand={i.brand}/>)}</ul>
        
    </div>
  )
}
