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
        <HomePage setCountry={setCountry} darkMode={darkMode} setDarkMode={setDarkMode}/>      
      </>

    )
  }else{
    return(
    <>
      <GlobalStyles darkMode={darkMode}/>
      <CountryDetails country={country} setCountry={setCountry} darkMode={darkMode} setDarkMode={setDarkMode}/>
    </>
    )
  }
  
}

export default App

/* 
FAFAFA - background l 

202C37 - background very dark d

white - color

color dark - 2A3844



*/
