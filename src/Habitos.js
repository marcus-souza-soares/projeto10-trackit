import axios from "axios"
import { useContext, useEffect, useState } from "react"
import UserContext from "./UserContext"
import styled from "styled-components"

import Header from "./components/Header"
import Footer from "./components/Footer"
import Novohabito from "./components/Novohabito"
import Habito from "./components/Habito"

export default function Habitos() {
    //Variaveis de criação novo hábito
    const [name, setName] = useState("");
    const [days, setDays] = useState([]);
    //TOken
    const { config, porcentagem } = useContext(UserContext);
    //Para criar um novo hábito
    const [display, setDisplay] = useState('none')
    //Para renderizar a tela
    const [render, setRender] = useState(false);
    const [meus_habitos, setMeus_habitos] = useState([]);
    useEffect(() => {
        const promisse = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', config);
        promisse.then(res => {
            console.log(res.data);
            setMeus_habitos(res.data)
        })
        promisse.catch(() => alert('Faça o login novamente!'))
    }, [config, render])


    return (
        <>
            <Header />
            <Container>
                <Novo >
                    <h1>Meus hábitos</h1>
                    <div className="criar" onClick={() => setDisplay('block')}>+</div>
                </Novo>

                {display === 'block' ? <Novohabito 
                setDisplay={setDisplay} 
                config={config} 
                display={display} 
                render={render} 
                setRender={setRender}
                name={name}
                setName={setName}
                days={days}
                setDays={setDays} /> : null}

                <Habitoslist>
                    {meus_habitos.map((item, index) => <Habito key={index} dados={item} render={render} setRender={setRender}></Habito>)}
                </Habitoslist>
                {meus_habitos.length < 1 ? <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p> : null}
            </Container>
            <Footer porcentagem={porcentagem}/>
        </>
    )
}
const Habitoslist = styled.div`
    padding-bottom: 80px;
`
const Container = styled.div`
    margin-top: 70px;
    width: 100%;
    height: 100%;
    padding: 0 20px;
    background-color: #F2F2F2;
    p{  
        font-size: 18px;
        color: #666666;
    }
`
const Novo = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding-top: 20px;

    h1 {
        font-size: 22.976px;
        color: #126BA5;
    }
    .criar {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 35px;
        background: #52B6FF;
        border-radius: 5px;
        color: #FFFFFF;
        font-size: 23px;
    }

`