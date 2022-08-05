import styled from "styled-components";


export const Container = styled.div`

    width: 100%;
    padding: 2rem;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    color: ${props => !props.darkMode ? 'black' : 'white'};

    .flag-country{
        height: 25rem;
        display: flex;

        img{
            width: 100%;
            height: 100%;
        }
    }

    @media screen and (max-width: 23.4375em){
        display: block;
        padding: 1rem;

        .flag-country{
            height: 15rem;

        }

    }

    @media screen and (max-width: 48.125em){

        display: block;

    }

    @media screen and (max-width: 61.375em) and (min-width: 48.1875em){

        display: block;
        margin: 0 auto;
        width: 70%;

    }

`

export const MoreInformations = styled.div`

    width: 50%;
    height: 25rem;
    padding: 2.5rem;

    span{
        font-weight: bold;
    }

    .informations-country{
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
        margin: 1rem 0;


        ul{
            list-style: none;
        }

        li{
            margin-top: 0.75rem;
        }

    }

    .border-countries{
        margin-left: 2rem;
        width: 5rem;
        padding: 0.6rem;
        border: transparent;
        background: ${props => !props.darkMode ? 'transparent' : '#202C37'};
        color: ${props => !props.darkMode ? 'black' : 'white'};
        box-shadow: 0 0 5px #a4a4a4;
        margin-top: 3.5rem;
        cursor: pointer;
    }

    @media screen and (max-width: 23.4375em){
        width: 100%;
        display: block;
        padding: 1rem 0 ;
        margin-top: 1rem;

        .informations-country{
            display: block;

            div{
                width: 100%;
                margin-bottom: 2rem;
            }

        }

        .div-border-countries{
            width: 100%;

           .border-countries{
            width: 4.1rem;
           }
        }

    }

    @media screen and (max-width: 48.125em){

        width: 100%;
        padding: 3.5rem 0;

        .informations-country{

            div:nth-child(1){
                margin-right: 1rem;
            }

        }

        .div-border-countries{
            span span{
                display: flex;
                flex-wrap: nowrap;
                flex-direction: column;
            }

            .border-countries{
                margin-top: 1rem;
                margin-left: 0;
                margin-right: 1rem;
            }
        }

    }

    @media screen and (max-width: 61.375em) and (min-width: 48.1875em){

        width: 100%;
        padding: 3.5rem 0;

        .informations-country{

            div:nth-child(1){
                margin-right: 1rem;
            }

        }

        .div-border-countries{
            span span{
                display: flex;
                flex-wrap: nowrap;
                flex-direction: column;
            }

            .border-countries{
                margin-top: 1rem;
                margin-left: 0;
                margin-right: 1rem;
            }
        }

    }

    @media screen and (max-width: 75.5625em){

        .informations-country{

            div:nth-child(1){
                margin-right: 1.5rem;
            }

        }

        .div-border-countries{
            span span{
                display: flex;
                flex-wrap: nowrap;
                flex-direction: column;
            }

            .border-countries{
                margin-top: 1rem;
                margin-left: 0;
                margin-right: 1.5rem;
            }
        }
    }

`