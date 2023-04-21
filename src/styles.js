import styled from 'styled-components'

import { FaTrashAlt, FaRocket } from "react-icons/fa"

export const Container = styled.div`
    background: linear-gradient(90deg, #383838 0%, #000000 81.25%);
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ToDoList = styled.div`
    background: white;
    padding: 30px 20px;
    border-radius: 5px;

    ul {
        padding: 0;
        margin-top: 60px;
    }
    
`

export const Input = styled.input`
    border: 2px solid rgba(209, 211, 212, 0.4);
    border-radius: 5px;
    height: 40px;
    margin-right: 28px;
    width: 342px;
`

export const Button = styled.button`
    width: 130px;
    height: 40px;
    background: #8052EC;
    border-radius: 5px;
    font-weight: 900;
    font-size: 17px;
    line-height: 2px;
    color: #FFFFFF;
    border: none;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }

    &:active {
        opacity: 0.6;
    }
`

export const ListItem = styled.div`
    background: ${ props => props.isFinished ? "#E8FF8B" : "#E4E4E4"};
    height: 60px;
    box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
    padding: 0 10px;
    width: 500px;

    li {
        list-style: none;
    }
`

export const Trash = styled(FaTrashAlt)`
    cursor: pointer;
    color: red;
`

export const Rocket = styled(FaRocket)`
    cursor: pointer;
    color: #4F0FC5;
`

export const Alert = styled.h3`
    color: #C0C0C0;
    display: flex;
    justify-content: center;
`