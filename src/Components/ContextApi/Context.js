import React, { createContext } from 'react'
import ConA from './ConA'


const FirstName = createContext()
const LastName = createContext()
const name = createContext()
const data = createContext()

export default function Context() {
    return (
        <div>
            <FirstName.Provider value={"Harshita"}>
                <LastName.Provider value={"patidar"}>
                    <name.Provider value={"pathrad"}>
                        <data.Provider value={"from"}>
                         <ConA /> 
                        </data.Provider>
                    </name.Provider>
                </LastName.Provider>
            </FirstName.Provider>

        </div>
    )
}
export { FirstName, LastName ,name,data}
