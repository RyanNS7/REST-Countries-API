import { FilterCountry, FormContainer, SearchCountry } from './style'
import { FaSearch } from 'react-icons/fa'
import { useState } from 'react'

export function SearchOrFilter(props){

    const [searchCountry, setSearchCountry] = useState('')

    function submitData(e){
        e.preventDefault()

        props.submitNameCountry(searchCountry)
    }

    function nameCountry(e){
        setSearchCountry(e.target.value)
    }

    function filterRegion(e){
        props.catchDataFiltered(e.target.value)
    }

    return (
        <FormContainer>

            <SearchCountry>
                
                <form>

                    <button onClick={submitData}> <FaSearch /> </button>
                    <input type='text' placeholder='Search for a country...' value={searchCountry} onChange={nameCountry}/>

                </form>

            </SearchCountry>

            <FilterCountry>

                <select name='regions' id='regions' onChange={filterRegion}>
                    <option selected hidden> Filter by Region </option>
                    <option value='africa'> Africa </option>
                    <option value='americas'> America </option>
                    <option value='asia'> Asia </option>
                    <option value='europe'> Europe </option>
                    <option value='oceania'> Oceania </option>
                </select>

            </FilterCountry>

        </FormContainer>
    )

}