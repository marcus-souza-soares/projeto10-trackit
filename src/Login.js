import styled from "styled-components";
import { Link } from 'react-router-dom'
import Loading from "./components/Loading";


export default function Login() {
    return (
        <>
            <Logo>
                <img src="imgs/logo.png" alt="" />
            </Logo>
            <Formulario>
                <form>
                    <input type="email" name="email" placeholder="email" required />
                    <input type="password" name="senha" placeholder="senha" required />
                    <button type="submit"><Loading></Loading></button>
                </form>
                <Link to='/cadastro'>
                    <h2>Não tem uma conta? Cadastre-se!</h2>
                </Link>
            </Formulario>
        </>
    )
}

const Logo = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 200px;

    img{
        width: 180px;
        height: 180px;
        margin-left: 10px;
    }
`
const Formulario = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    form {
        margin-top: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    input {
        width: 300px;
        height: 45px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        margin-bottom: 10px;

        &::placeholder{
            font-size: 20px;
            padding-left: 15px;
            color: #DBDBDB;
        }
    }
    button{
        width: 300px;
        height: 45px;
        background-color: #52B6FF;
        color: #FFFFFF;
        font-size: 21px;
        background: #52B6FF;
        border-radius: 5px;
        border: none;
    }
    h2{
        margin-top: 10px;
        color: #52B6FF;
        text-decoration: underline;
    }
    
`
