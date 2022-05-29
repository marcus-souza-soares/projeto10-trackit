import axios from 'axios'
import styled from "styled-components";
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react'

import Loading from "./components/Loading";

export default function Cadastro() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [image, setImage] = useState('');

    const [loading, setLoading] = useState(false)
    const [desativado, setDesativado] = useState(false)

    const cadastrar = (e) => {
        e.preventDefault();
        setLoading(true)
        setDesativado(true)
        setTimeout(() => {
            let body = {
                email,
                name,
                image,
                password
            }
            console.log(body)
            const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up', body);

            promise.then((res) => {
                console.log(res.data)
                setLoading(false)
                setDesativado(false)
                navigate("/")
            })
            promise.catch(() => {
                console.log('dados não encontrados')
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
                <Formulario>
                    <form onSubmit={cadastrar}>
                        <input
                            type="email"
                            name="email"
                            placeholder="email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            disabled={desativado}
                            required
                        />
                        <input
                            type="password"
                            name="senha"
                            placeholder="senha"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            disabled={desativado}
                            required />
                        <input
                            type="text"
                            name="senha"
                            placeholder="nome"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            disabled={desativado}
                            required />
                        <input
                            type="url"
                            name="senha"
                            placeholder="foto"
                            onChange={(e) => setImage(e.target.value)}
                            value={image}
                            disabled={desativado}
                            required />
                        <button type="submit" disabled={desativado}>{loading ? <Loading></Loading> : 'Entrar'}</button>
                    </form>
                    <Link to='/'>
                        <h2>Já tem uma conta? Faça login!</h2>
                    </Link>
                </Formulario>
            </Container>
        </>
    )
}
const Container = styled.div`
    height: 100%;
    background-color: #FFFFFF;
    padding-top: 180px;
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