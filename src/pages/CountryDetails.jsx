import { Header } from '../components/Header'
import { CountryDetailsExtended } from '../components/CountryDetailsExtended'
import { BsArrowLeft } from 'react-icons/bs'


export function CountryDetails({ country, setCountry }){

    return(
    <>
        <Header />

        <button className="back-homepage" onClick={() => {setCountry([])}}> <BsArrowLeft className="arrow"/> Back</button>
        
        
        <CountryDetailsExtended dataCountry={country} setCountry={setCountry}/>    
    </>
        
    )

}