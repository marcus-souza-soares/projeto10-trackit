import styled from "styled-components"
import axios from 'axios'

import DiaSelecionado from "./minicomponents/DiaSelecionado"

export default function Novohabito({display, setDisplay, config, render, setRender, name, setName, days, setDays}){
    const lista = ['D','S','T','Q','Q','S','S']
    let desativado = false;

    function Salvar(){
        desativado = true;
        const body = {
            name, days
        }
        if(days.length < 1){
            alert("Você precisa selecionar os dias!")
            return
        } else if (name === ""){
            alert("Defina um título!");
            return
        }
        console.log(body)
        const promisse = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', body, config)
        promisse.then(res => {
            console.log(res.data)
            desativado = false;
        })
        promisse.catch((res)=> alert('Faça o login novamente!'))
        setDisplay('none')
        setRender(!render)
        setName("")
    }

    return (
        <Container display={display}>
            <input type="text" placeholder="nome do hábito" onChange={(e) => setName(e.target.value)} value={name} />
            <div className="dias">
                {lista.map((dia, index) => (
                    <DiaSelecionado key={index} indice={index} days={days} setDays={setDays} desativado={desativado}>
                        <h1>{dia}</h1>
                    </DiaSelecionado>
                ))}
            </div>
            <Buttons>
                <div className="cancelar" onClick={() => setDisplay('none')}>Cancelar</div>
                <div className="salvar" onClick={Salvar}>Salvar</div>
            </Buttons>
        </Container>
    )
}
const Buttons = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
        div {
            margin-left: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 84px;
            height: 35px;
            font-size: 16px;
            border-radius: 5px;
        }
        .cancelar{
            background-color: inherit;
            color: #52B6FF;
        }
        .salvar {
            background-color: #52B6FF;
            color: #FFFFFF;
        }
`

const Container = styled.div`
    display: ${props => props.display};
    margin-top: 30px;
    width: 100%;
    height: 180px;
    background: #FFFFFF;
    border-radius: 5px;
    padding: 20px;
    
    input{
        width: 100%;
        color: #666666;
        font-size: 20px;
        padding-left: 15px;
        height: 45px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        &::placeholder{
            color: #DBDBDB;
        }

    }
    .dias{
        display: flex;
        margin-top: 10px;
    }
`