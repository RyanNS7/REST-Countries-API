import { FilterCountry, FormContainer, SearchCountry } from './style'
import { FaSearch } from 'react-icons/fa'

export function SearchOrFilter(){

    function asd(e){
        e.preventDefault()
    }

    function test(e){
        console.log(e.target.value)
    }

    return (
        <FormContainer>

            <SearchCountry>
                
                <form>

                    <button onClick={asd}> <FaSearch /> </button>
                    <input type='text' placeholder='Search for a country...' />

                </form>

            </SearchCountry>

            <FilterCountry>

                <select name='regions' id='regions' onChange={test}>
                    <option selected hidden> Filter by Region </option>
                    <option value='africa'> Africa </option>
                    <option value='america'> America </option>
                    <option value='asia'> Asia </option>
                    <option value='europe'> Europe </option>
                    <option value='oceania'> Oceania </option>
                </select>

            </FilterCountry>

        </FormContainer>
    )

}