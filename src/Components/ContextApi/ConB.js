import React, { useContext } from 'react'
import ConC from './ConC'
import {FirstName,name,data} from "./Context"


// using usecontaxt
export default function ConB() {
    const firstname = useContext(FirstName);
    const fname = useContext(name);
    const fdata = useContext(data);
  return (
    <div>
        <h1>Hello {firstname} {fdata} {fname}</h1>
    </div>
  )
}
