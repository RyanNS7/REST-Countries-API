import styled from "styled-components";


export const Container = styled.div`

    width: 100%;
    padding: 2rem;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;

    .flag-country{
        height: 25rem;
        display: flex;

        img{
            width: 100%;
            height: 100%;
        }
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
        background: transparent;
        box-shadow: 0 0 5px #a4a4a4;
        margin-top: 3.5rem;
        cursor: pointer;
    }

`