import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import UserContext from "./UserContext";

import Header from "./components/Header";
import TodayHab from './components/TodayHab'
import Footer from "./components/Footer";

export default function Hoje(){
    //token
    const { config, setConfig, porcentagem, setPorcentagem } = useContext(UserContext);
    const [dados, setDados] = useState([])

    const week = 
    [{ dayId: 0, day: 'Domingo'},
    { dayId: 1, day: 'Segunda'},
    { dayId: 2, day: 'Terça'},
    { dayId: 3, day: 'Quarta'},
    { dayId: 4, day: 'Quinta'},
    { dayId: 5, day: 'Sexta'},
    { dayId: 6, day: 'Sábado'}]

    //dia da semana
    const now = new Date();
    let today = undefined;

    for(let i = 0; i < week.length; i++){
        if (week[i].dayId === now.getDay()){
            today =  week[i].day;
        }
    }
    let contador = 0;
    const [render, setRender] = useState(false);
    //buscar tokens do servidor
    useEffect(() => {
        const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', config)
        promise.then(res => {
            console.log(res.data);
            setDados(res.data)
        })
        promise.catch(() => alert('Faça o login novamente!'))
    },[config,render])

    if (dados.length > 0){
        for(let i = 0; i < dados.length; i++){
            if(dados[i].done){
                contador++;
            }
        }
        console.log(contador)
        setPorcentagem(Math.ceil((contador/dados.length)*100));
    } else if (dados.length === 0){
        setPorcentagem(0)
    }
    
    return (
        <>
            <Header/>
            <Container>
                <Dia>{today}, {now.getDate()}/{now.getMonth() + 1 < 10 ? `0${now.getMonth() + 1}` : now.getMonth() + 1}</Dia>
                <Status>{contador > 0 ? <h2 style={{color: "green"}}>{` ${porcentagem}% dos hábitos concluídos`}</h2> : "Nenhum hábito concluido ainda"}</Status>
                <Habitos>
                    {dados.map((habit, index) => <TodayHab 
                    key={index} 
                    dados={habit}
                    setDados={setDados} 
                    contador={contador}
                    config={config}
                    render={render}
                    setRender={setRender}
                    setConfig={setConfig}/>)}
                </Habitos>
            </Container>
            <Footer porcentagem={porcentagem}/>

        </>
    )
}
const Container = styled.div`
    margin-top: 70px;
    background-color: #F2F2F2;
    padding: 40px 20px;
    height: 100%;
    
`
const Dia = styled.h1`
    font-weight: 400;
    font-size: 23px;
    color: #126BA5;
`
const Status = styled.h2`
    font-size: 18px;
    color: #BABABA;
    margin-top: 10px;
`
const Habitos = styled.div`
    background-color: #F2F2F2;
    margin-top: 30px;
    padding-bottom: 100px;
`