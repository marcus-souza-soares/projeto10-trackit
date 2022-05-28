import ProgressBar from "./ProgressBar";
import styled from "styled-components";
import { Link, useNavigate } from 'react-router-dom';

export default function Footer() {
    const navigate = useNavigate();
    return (

        <>
            <Alt>
                <Link to="/habitos" style={{ textDecoration: 'none', color: '#52B6FF' }} >
                    <h1>Hábitos</h1>
                </Link>
                <Link to="/hoje"><ProgressBar /></Link>
                <Link to='/historico' style={{ textDecoration: 'none', color: '#52B6FF' }}>
                    <h1>Histórico</h1>
                </Link>
            </Alt>
        </>
    )
}

const Alt = styled.div`
    width: 100%;
    height: 70px;
    background: #FFFFFF;
    position: fixed;
    bottom: 0;
    left:0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    font-size: 18px;
    color: #52B6FF;

    h1{
        &:hover{
            cursor: pointer;
        }
    }
`