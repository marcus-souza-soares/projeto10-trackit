import Header from "./components/Header";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";

import styled from "styled-components";
import UserContext from "./UserContext";

export default function Historico() {
    const { config } = useContext(UserContext);
    const [porcentagem, setPorcentagem] = useState(0);
    useEffect(()=>{
        const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', config)
        promise.then(res => {
            let contador = 0;
            for(let i = 0; i < res.data.length; i++){
                
                if(res.data[i].done){
                    contador++;
                    setPorcentagem(contador/res.data.length*100)
                }
            }
        })
    },[])
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