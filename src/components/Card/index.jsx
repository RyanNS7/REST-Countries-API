import { useEffect, useState } from "react"
import { CardContainer } from "./style"

export function Card({data}){
    
    useEffect(() => {
        console.log(data)
    }, [])

    return(

        <CardContainer>

            <div>
                <img src={data.flags.png} alt={data.name.common} />
            </div>

            <div>

                <h2> {data.name.common} </h2>

                <ul>
                    <li><span>Population</span>: {data.population} </li>
                    <li><span>Region</span>: {data.region} </li>
                    <li><span>Capital</span>: {data.capital} </li>
                </ul>

            </div>
            

        </CardContainer>
    )
}
