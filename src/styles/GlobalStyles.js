import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
}

body{
    background: hsl(0, 0%, 98%);

    .some-countries{
        max-width: 90%;
        margin: auto;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 1rem;
    }

    .back-homepage{

        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 2rem;
        width: 7rem;
        padding: 0.6rem;
        border: transparent;
        background: transparent;
        box-shadow: 0 0 5px #a4a4a4;
        margin-top: 3.5rem;
        cursor: pointer;

        .arrow{
            margin-right: 8px;
        }
    }

    @media screen and (max-width: 88.75em){
        .some-countries{
            max-width: 98%;
            justify-content: center;
        }
    }

    @media screen and (max-width: 64em) {
        .some-countries{
            display: grid;
            margin: auto;
            grid-template-columns: 1fr 1fr 1fr;
            justify-content: center;
            max-width: 98%;
        }
    }

    @media screen and (max-width: 48em) {
        .some-countries{
            display: grid;
            margin: auto;
            grid-template-columns: 1fr 1fr;
            justify-content: center;
            max-width: 90%;
        }
    }

    @media screen and (max-width: 31.25em){

        .some-countries{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }

        .back-homepage{
            margin: 2rem;
        }
    }
}
`