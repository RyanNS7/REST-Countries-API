import styled from 'styled-components'

export const CardContainer = styled.div`

    width: 20rem;
    cursor: pointer;
    box-shadow: 0 0 5px #a4a4a4;
    background-color: white;

    div{
        width: 100%;
        height: 50%;
        border-bottom: 1px solid black;
        

        img{
            width: 100%;
            height: 100%;
        }

    }

    div:nth-last-child(1){
        padding: 2rem;
        text-decoration: none;
        font-size: 16px;
        border: none;

        h2{
            margin-bottom: 1rem;
            font-size: 1.5rem;
        }

        li{
            margin: 0.4rem 0 ;
            list-style: none;
        }

        span{
            font-weight: bold;
        }

    }

    @media screen and (max-width: 87.5em){
        width: 98%;
    }

    @media screen and (max-width: 64em){
        width: 100%;
        margin-bottom: 2rem;
    }

    @media screen and (max-width: 31.25em){

        width: 80%;
        height: 24rem;
    }

`