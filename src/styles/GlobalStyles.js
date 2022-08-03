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
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 2rem;
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
}
`