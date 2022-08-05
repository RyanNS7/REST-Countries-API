import { Container, MoreInformations } from "./style"
import axios from 'axios'

export function CountryDetailsExtended({ dataCountry, setCountry, darkMode}){

    return(
        <>
        <Container darkMode={darkMode}>

            <div className="flag-country">
                <img src={dataCountry.flags.svg} alt={dataCountry.name}/>
            </div>

            <MoreInformations darkMode={darkMode}>
                <div>
                    <h1>
                        {dataCountry.name}
                    </h1>                      
                </div>

                <div className="informations-country">
                    <div>
                        <ul>
                            <li> <span>Native Name:</span> {dataCountry.nativeName} </li>
                            <li> <span>Population:</span> {dataCountry.population.toLocaleString('en-US')} </li>
                            <li> <span>Region:</span> {dataCountry.region} </li>
                            <li> <span>Sub Region:</span> {dataCountry.subregion} </li>
                            <li> <span>Capital:</span> {dataCountry.capital} </li>
                        </ul> 
                    </div>

                    <div>
                        <ul>
                            <li> <span>Top Level Domain:</span> {dataCountry.topLevelDomain} </li>
                            <li> <span>Currencies:</span> {dataCountry.currencies.map((currency) => {
                                return currency.name
                            }).join(', ')} </li>
                            <li> <span>Languages:</span> {dataCountry.languages.map((language) => {
                                return language.name
                            }).join(', ')} </li>
                        </ul>
                    </div>
                </div>

                <div className="div-border-countries">
                 {dataCountry.borders !== undefined && <span><span>Border Countries:</span> 
                        {dataCountry.borders.slice(0, 3).map((border) => {
                            return <button className="border-countries" onClick={() => {
                                axios.get(`https://restcountries.com/v2/alpha/${border}`).then(response => {
                                console.log(response.data)    
                                setCountry(response.data)})
                            }}>{border}</button>
                        })}
                    </span>  }
                </div>

            </MoreInformations>   

        </Container>

        </>
    )

}