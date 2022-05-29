import styled from "styled-components"
import { useState } from 'react'

export default function DiaSelecionado({ children, indice, days, setDays }){
    const [selecionado, setSelecionado] = useState(false);

    function Selecionar(){
        if (selecionado){
            setDays([...days.filter(dia => dia === indice ? false : true )])
            setSelecionado(!selecionado)
        } else {
            setDays([...days, indice])
            setSelecionado(!selecionado)
        }
    }

    return(
       <Container selecionado={selecionado} onClick={Selecionar}>
           { children }
       </Container> 
    )
}

const Container = styled.div`
    width: 30px;
    height: 30px;
    color: ${props => props.selecionado ? '#FFFFFF' : '#DBDBDB'};
    font-size: 20px;
    margin-right: 5px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${props => props.selecionado ? '#CFCFCF' : '#FFFFFF'};
`