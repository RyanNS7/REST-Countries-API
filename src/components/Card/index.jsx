import { useEffect, useState } from "react"
import { CardContainer } from "./style"

export function Card({data, setCountry, darkMode}){

    return(

        <CardContainer darkMode={darkMode} onClick={() => {setCountry(data)}}>

            <div>
                <img src={data.flags.png} alt={data.name} />
            </div>

            <div>

                <h2> {data.name} </h2>

                <ul>
                    <li><span>Population</span>: {data.population.toLocaleString('en-US')} </li>
                    <li><span>Region</span>: {data.region} </li>
                    <li><span>Capital</span>: {data.capital} </li>
                </ul>

            </div>
            

        </CardContainer>
    )
}
