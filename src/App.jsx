import { useEffect, useState } from "react"
import axios from 'axios'
import { Header } from './components/Header'
import { Card } from './components/Card'
import { GlobalStyles } from './styles/GlobalStyles'
import { SearchOrFilter } from "./components/SearchOrFilter"

/*

//// pegar por região ////

---------- https://restcountries.com/v3.1/region/{region} ----------


//// todos os paises ////

---------- https://restcountries.com/v3.1/all ----------

*/


function App() {

  const [data, setData] = useState([])

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/region/Americas").then(response => {
      setData(response.data)
    })

    console.log(data)
  }, [])

  return (
  <>
    <GlobalStyles />

    <Header />

    <SearchOrFilter />

    <div className="some-countries">
      {data.map((country, key) => {
        return <Card data={country} key={key} />
      })}
    </div>
    
  </>
  )
}

export default App
