import styled from 'styled-components'


export const FormContainer = styled.div`

    width: 100%;
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;


`

export const SearchCountry = styled.div`

    width: 35%;

    form{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 4rem;
        border-radius: 0.5rem;
        box-shadow: 0 0 5px #a4a4a4;

        button,
        input{
            padding: 0.5rem;
            height: 100%;
        }

        button{
            width: 20%;
            border-radius: 0.5rem 0 0 0.5rem;
            border-color: transparent;
            cursor: pointer;
        }
        
        input{
            width: 80%;
            padding: 1rem;
            border-radius: 0 0.5rem 0.5rem 0;
            border-color: transparent;
        }

        input:focus{
            box-shadow: 0 0 0 0;
            border: 0 none;
            outline: 0;
        } 

    }

`

export const FilterCountry = styled.div`

    box-shadow: 0 0 1em #a4a4a4;
    border-radius: 0.5rem;
    width: 20%;
    height: 4rem;

    select{
        width: 100%;
        height: 100%;
        border-radius: 0.5rem;
        border: transparent;
        padding: 1rem;
        font-size: 18px;

        option{
            padding: 15rem;
            font-size: 18px;
        }

    }

    select:focus {
        box-shadow: 0 0 0 0;
        border: 0 none;
        outline: 0;
    } 


`