import Header from "./components/Header";
import Footer from "./components/Footer";
import { useContext } from "react";

import UserContext from "./UserContext";
import styled from "styled-components";

export default function Historico() {
    const { porcentagem } = useContext(UserContext)
    return (
        <>
            <Header />
            <Container>
                <Titulo>
                    <h1>Histórico</h1>
                </Titulo>
                <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
            </Container>
            <Footer porcentagem={porcentagem}/>
        </>

    )
}
const Container = styled.div`
    margin-top: 70px;
    width: 100%;
    height: 100%;
    padding: 0 20px;
    background-color: #F2F2F2;
    h1 {
        font-size: 22.976px;
        color: #126BA5;
    }
    p{  
        margin-top: 30px;
        font-size: 18px;
        color: #666666;
    }
`
const Titulo = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    padding-top: 20px;
` 