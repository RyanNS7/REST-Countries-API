import styled from 'styled-components'

export const HeaderContainer = styled.div`

    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    box-shadow: 0 0 5px #a4a4a4;
    margin-bottom: 1rem;
    background: white;

    div:nth-child(1){
        margin-left: 1rem;
    }

    div:nth-child(2){
        width: 10rem;
        text-align: center;
        margin-right: 1rem;
  
        button{
            height: 3rem;
            width: 90%;
            text-align: center;
            font-size: 20px;
            cursor: pointer;

            background: transparent;
            border-color: transparent;
        }

    }

`