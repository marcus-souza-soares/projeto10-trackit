import styled from "styled-components";
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useContext, useState } from "react";
import "./Login.css"

import Loading from "./components/Loading";
import UserContext from "./UserContext";

export default function Login() {
    const { setImage } = useContext(UserContext);
    const navigate = useNavigate();
    const { setConfig } = useContext(UserContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false)
    const [desativado, setDesativado] = useState();

    const logar = (e) => {
        e.preventDefault();
        setLoading(true)
        setDesativado(true)
        setTimeout(() => {
            let dados = {
                email,
                password
            }
            console.log(dados)
            const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', dados);

            promise.then((res) => {
                console.log(res.data)
                setDesativado(false)
                setConfig({
                    headers: {
                        Authorization: `Bearer ${res.data.token}`
                    }
                })
                navigate('/hoje')
                setImage(res.data.image)
            });

            promise.catch(() => {
                alert('Login não encontrado!')
                setLoading(false)
                setDesativado(false)
            })
        }, 2000)
    }

    return (
        <>
            <Container>
                <Logo>
                    <img src="imgs/logo.png" alt="" />
                </Logo>
                <Formulario desativado={desativado}>
                    <form onSubmit={logar}>
                        <input
                            type="email" name="email"
                            placeholder="email" onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            disabled={desativado}
                            required />
                        <input
                            type="password"
                            name="senha"
                            placeholder="senha"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            disabled={desativado}
                            required />
                        <button type="submit" disabled={desativado}>{loading ? <Loading></Loading> : 'Entrar'}</button>
                    </form>
                    <Link to='/cadastro'>
                        <h2>Não tem uma conta? Cadastre-se!</h2>
                    </Link>
                </Formulario>
            </Container>
        </>
    )
}
const Container = styled.div`
    height: 100%;
    padding-top: 200px;
`
const Logo = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
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
        padding-left: 10px;
        background-color: ${props => !props.desativado ? '#FFFFFF' : "#F2F2F2"};

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
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: ${props => props.desativado ? 0.6 : 1};;
    }
    h2{
        margin-top: 10px;
        color: #52B6FF;
        text-decoration: underline;
    }
    
`
