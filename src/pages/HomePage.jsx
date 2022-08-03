import { useEffect, useState } from "react"
import axios from 'axios'
import { Header } from '../components/Header'
import { Card } from '../components/Card'
import { SearchOrFilter } from "../components/SearchOrFilter"

export function HomePage(props){
    const [dataCountry, setDataCountry] = useState([])
    const [filteredRegion, setFilteredRegion] = useState('')
    const [nameOfTheCountry, setNameOfTheCountry] = useState('')

    useEffect(() => {
        axios.get("https://restcountries.com/v2/region/Americas").then(response => {
        setDataCountry(response.data)
        })
    }, [])

    useEffect(() => {
        if(filteredRegion !== ''){
        axios.get(`https://restcountries.com/v2/region/${filteredRegion}`).then(response => {
            setDataCountry(response.data)
        })
        }

    }, [filteredRegion])

    useEffect(() => {
        if(nameOfTheCountry !== ''){
        axios.get(`https://restcountries.com/v2/name/${nameOfTheCountry}`).then(response => {
            setDataCountry(response.data)
        }).catch(err => {
            setDataCountry([])
        })
        }
    }, [nameOfTheCountry])

    function catchDataFiltered(region){

        setFilteredRegion(region)

    }

    function searchCountry(country){

        setNameOfTheCountry(country)

    }

    return (
    <>
        <Header />

        <SearchOrFilter catchDataFiltered={catchDataFiltered} submitNameCountry={searchCountry}/>

        <div className="some-countries">
        {dataCountry.map((country, key) => {
            return <Card data={country} key={key} setCountry={props.setCountry}/>
        })}
        </div>
        
    </>
    )
}