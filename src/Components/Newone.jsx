import axios from 'axios';
import React, { useState } from 'react'


const Newone = () => {
    const [cityname, setcityname] = useState(null)
    const [weatherData, setWeatherData] = useState(null)

    const cityhandle = (e) => {
        setcityname(e.target.value)
    }

    let name = cityname
    const options = {
        method: 'GET',
        url: 'http://api.weatherapi.com/v1/current.json',
        params: { q: { name },state:'MadhyaPradesh', dt: '2022-12-25', key: 'd359394a39134627b7b74045220806' }
    };


    const setval = ((e) => {
        e.preventDefault()

        axios.request(options).then(function (res) {
            setWeatherData([res.data]);
        }).catch((err) => {
            console.log(err)
        })

    })
        console.log(weatherData)

        const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        var d=new Date()
        var day= weekday[d.getDay()]
        console.log(day)
    return (
        <>
            <div>
                <form action="" style={{ display: "flex", justifyContent: "center", marginTop: "50px"}}>
                    <label>Enter city name:- <input type="text" value={cityname} onChange={cityhandle} ></input></label><br/>
                    <button className='btn btn-primary' style={{ marginLeft: "20px",border:"none"}} onClick={setval}>Show</button>
                </form>
            </div>
            <div>
                {
                    weatherData === null ? " " :
                        weatherData.map((item, key) => {
                            return (
                                <>
                                <section style={{overflow:"hidden",textAlign:"center",marginTop:"50px"}}>

                                    <div className="container ">
                                        <div className='row'>
                                            <div className='col-lg-4 col-md-4,col-sm-12 sunny'>
                                                <h1>{item.current.condition.text}</h1>
                                                <h2>{item.current.temp_c}</h2>
                                                <img>{item.icon}</img>
                                                <h5>{day}</h5>  
                                            </div>
                                            <div className='col-lg-4 col-md-4,col-sm-12 cloudy'>
                                              <img src='images/cloud_icon.png'/>
                                              <h1>cloudy</h1>
                                            </div>
                                            <div className='col-lg-4 col-md-4,col-sm-12 rainy'>
                                            <img src='images/rain_svg.png'/>
                                            <h1>rainy</h1>

                                            </div>
                                        </div>
                                    </div>
                                </section>
                                </>
                            )
                        })

                }
            </div>

        </>
    )
}
export default Newone