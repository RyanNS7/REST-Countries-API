import { useState } from 'react'
import { HomePage } from './pages/HomePage'
import { CountryDetails } from './pages/CountryDetails'
import { GlobalStyles } from './styles/GlobalStyles'

function App() {

  const [country, setCountry] = useState([])
  const [darkMode, setDarkMode] = useState(false)

  if(country.length === 0){
    return(
      <>
        <GlobalStyles darkMode={darkMode}/>
        <HomePage setCountry={setCountry} />      
      </>

    )
  }else{
    return(
    <>
      <GlobalStyles />
      <CountryDetails country={country} setCountry={setCountry}/>
    </>
    )
  }
  
}

export default App
