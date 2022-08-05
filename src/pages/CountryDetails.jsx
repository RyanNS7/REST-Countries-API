import { Header } from '../components/Header'
import { CountryDetailsExtended } from '../components/CountryDetailsExtended'
import { BsArrowLeft } from 'react-icons/bs'


export function CountryDetails({ country, setCountry, darkMode, setDarkMode }){

    return(
    <>
        <Header darkMode={darkMode} setDarkMode={setDarkMode}/>

        <button className="back-homepage" onClick={() => {setCountry([])}}> <BsArrowLeft className="arrow"/> Back</button>
        
        
        <CountryDetailsExtended dataCountry={country} setCountry={setCountry} darkMode={darkMode}/>    
    </>
        
    )

}