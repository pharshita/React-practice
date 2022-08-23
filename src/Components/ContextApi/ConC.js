import React from 'react'
import {FirstName,LastName,name} from "./Context"


//using context api
export default function ConC() {
  return (
    <>
    <FirstName.Consumer>
        {(fname)=>{
            return(
            <LastName.Consumer>
                {(lname)=>{
                        return(
                            <name.Consumer>
                                {(gname)=>{
                                    return(
                                        <h1>Hello Welcome To Our Page {fname} {lname} {gname}</h1>
                                    )
                                }}
                            </name.Consumer>
                        )
                }}
            </LastName.Consumer>
            )
        }}
    </FirstName.Consumer>
    </>
  )
}
