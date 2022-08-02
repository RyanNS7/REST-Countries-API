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
}
`