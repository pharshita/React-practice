import axios from 'axios';
import React, { useEffect, useState } from 'react'
// import fs from 'fs'

export default function Tempalate() {

    const[File,setFile] = useState(null)
    const[Filee,setFilee] = useState(null)

    

    const submit = ((e) => {
        e.preventDefault()

        var data = new FormData()
        var data1 = new FormData()

       data.append('title','exp1')
       data.append('file',`${File}`)
       debugger
       data1.append('title','exp2')
       data1.append('file',`${Filee}`)
       

//    data = {'title':"example1",'file' : File}
//    data2 = {'title':"example2",'file' : Filee}
  // data2 = {'file' : File}
//    let mainData=[data,data2]
       
// var mainData = [${data},${data1}]

        

        const options = {
            method: 'post',
            url: 'https://b2d1-2405-201-300b-7f86-806b-6ad-da4f-3184.in.ngrok.io/api/v1/stories/new/',
            // data: mainData
                
            
        };
        axios.request(options)
        alert("Form Submit Successfully")
    })


const Filehandle = (e)=>{
    e.preventDefault()
    setFile(e.target.files['0'])
}
   
const Filehandlee = (e)=>{
    e.preventDefault()
    setFilee(e.target.files['0'])
    console.log(e.target.files['0'])
}
       
    console.log(File)
    return (
        <>
            <form action="" id='submit'>
                <div style={{ textAlign: "center", marginTop: "50px" }}>
                    <label>
                        Enter Your Title:- <input type="text" ></input>
                    </label><br /><br />
                    {/* <label>
                        Enter username:- <input type="text"></input>
                    
                    </label><br /><br /> */}
                    <input type="file" onChange={Filehandle} style={{ marginLeft: "-16px" }}></input><br /><br />
                    <input type="file" onChange={Filehandlee} style={{ marginLeft: "-16px" }}></input><br /><br />
                    <button className='btn btn-success' onClick={submit}>Submit</button>
                </div>
            </form>
        </>
    )
}
