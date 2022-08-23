import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Project() {
    const [lat, setlat] = useState(null)
    const [lon, setlon] = useState(null)
    const [cityname, setcityname] = useState("")
    const [api, setapi] = useState(null)
    const [nameapi, setNameApi] = useState(null)

    // console.log(api)

    const cityhandle = (e) => {
        setcityname(e.target.value)
    }
    const lathandle = (e) => {
        setlat(e.target.value)
    }
    const lonhandle = (e) => {
        setlon(e.target.value)
    }
    const name = cityname
    let newurl = `https://api.openweathermap.org/geo/1.0/direct?q=${name},state=MadhyaPradesh&appid=6a78dbd7d09233260fce1f8122e337b5`
    // const changeval = ((e) => {
    //     e.preventDefault()
    //     axios.get(url).then((res) => {
    //         if (res) {
    //             setapi([res.data])

    //         } else {
    //             setapi(null)
    //         }

    //     }).catch((err) => {
    //         console.log(err)
    //     })

    // })
    //  console.log(api)

    const setval = ((e) => {
        e.preventDefault()

        axios.get(newurl).then((res) => {
            if (res) {
                setNameApi(res.data)

            } else {
                setNameApi(null)
            }

        }).catch((err) => {
            console.log(err)
        })

    })

    useEffect(()=>{
        if (nameapi) {
            nameapi.map((item) => {
                setlat(item.lat)
                setlon(item.lon)
            })
        }

        Apicall()
    })
   

function Apicall(){
    if (lon === null) {
        console.log(' ')
    } else {
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=6a78dbd7d09233260fce1f8122e337b5`
        axios.get(url).then((res) => {
            alert(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }
}
    console.log(nameapi)
    console.log(lat)
    console.log(lon)





    // useEffect(()=>{

    //     if(api===null)
    //     {
    //         console.log('scs')
    //     }
    //     else{
    //         console.log(api)
    //     }
    // })

    return (

        <div>
           
            <form action="" style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
                <label>Enter name:-  <input type="text" value={cityname} onChange={cityhandle}></input></label>
                <button style={{ marginLeft: "20px" }} onClick={setval}>setName</button>
            </form>
            {/* <form style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
                <label>Enter Lat:-  <input type="text" value={lat} onChange={lathandle}></input></label>
                <label style={{ marginLeft: "30px" }}>Enter lon:- <input type="text" value={lon} onChange={lonhandle}></input></label>
                <button style={{ marginLeft: "20px" }} onClick={changeval}> Submit</button>
            </form> */}

        </div>
    )
}

