import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Api_practice() {
    const[api,setapi]=useState("")
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/todos").then((res)=>{
          setapi(res.data)
        }).catch((err)=>{
             console.log(err)
        })
    },[])
    console.log(api)
  return (
    <div className="container text-center">
            <h1 className='heading'>Fetch Api</h1>

            <table border="2" className='tab'>
                <thead>
                    <tr className='head'>
                        <th>ID</th>
                    </tr>
                </thead>
                <tbody>
                    {    
                        api.map((item) => 
                                <tr className='body'>
                                <td>{item.id}</td>         
                            </tr>
                        )
                    }
                    

                </tbody>

            </table>
        </div>
  )
}
