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
    //const [dados, setDados] = useState([]);
    const [porcentagem, setPorcentagem] = useState(0)

    //TOken
    const { config } = useContext(UserContext);
    //Para criar um novo hábito
    const [display, setDisplay] = useState('none')
    //Para renderizar a tela
    const [render, setRender] = useState(false);
    const [meus_habitos, setMeus_habitos] = useState([]);
    useEffect(() => {
        const promise1 = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', config);
        promise1.then(res => {
            console.log(res.data);
            setMeus_habitos(res.data)
        })
        promise1.catch(() => alert('Faça o login novamente!'))

        //Segunda parte do axios para renderizar as porcentagens
        const promise2 = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', config)
        promise2.then(res => {
            let contador = 0;
            for(let i = 0; i < res.data.length; i++){
                const dados = res.data;
                if(dados[i].done){
                    contador++;
                    setPorcentagem(contador/res.data.length*100)
                }
            }
        })

    }, [config, display, render])
    


    return (
        <>
            <Header />
            <Container>
                <Novo >
                    <h1>Meus hábitos</h1>
                    <div className="criar" onClick={() => setDisplay('block')}>+</div>
                </Novo>

                {display === 'block' ? <Novohabito 
                 
                config={config} 
                display={display} 
                setDisplay={setDisplay}
                render={render} 
                setRender={setRender}
                name={name}
                setName={setName}
                days={days}
                setDays={setDays}
                /> : null}

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