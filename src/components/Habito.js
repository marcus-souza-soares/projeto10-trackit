import styled from "styled-components"
import axios from "axios";
import { useContext } from "react";

import UserContext from "../UserContext";

export default function Habito({ dados,setRender,render }) {
    const lista = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
    const { config } = useContext(UserContext);
    function Dia({ children, indice, ids }) {
        let cor = false;
        console.log(indice)
        console.log(ids)
        for(let i = 0; i < ids.length; i++){
            if (ids[i] === indice){
                cor = true;
            }
        }
        return (
            <Daybox cor={cor}>
                {children}
            </Daybox>
        )
    }
    function Remover(){
        let resultado = window.confirm("Tem certeza que deseja apagar? ");
        if (resultado){
            const promise = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${dados.id}`,config);
            promise.then(() => console.log('removido') )
            promise.catch(()=> console.log('não removido'))
            setRender(!render)
        }
    }

    return (    
        <Container>
            <h1>{dados.name}</h1>
            <svg onClick={Remover} width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M13 3C13 3.26522 12.8946 3.51957 12.7071 3.70711C12.5196 3.89464 12.2652 4 12 4H11.5V13C11.5 13.5304 11.2893 14.0391 10.9142 14.4142C10.5391 14.7893 10.0304 15 9.5 15H3.5C2.96957 15 2.46086 14.7893 2.08579 14.4142C1.71071 14.0391 1.5 13.5304 1.5 13V4H1C0.734784 4 0.48043 3.89464 0.292893 3.70711C0.105357 3.51957 0 3.26522 0 3V2C0 1.73478 0.105357 1.48043 0.292893 1.29289C0.48043 1.10536 0.734784 1 1 1H4.5C4.5 0.734784 4.60536 0.48043 4.79289 0.292893C4.98043 0.105357 5.23478 0 5.5 0L7.5 0C7.76522 0 8.01957 0.105357 8.20711 0.292893C8.39464 0.48043 8.5 0.734784 8.5 1H12C12.2652 1 12.5196 1.10536 12.7071 1.29289C12.8946 1.48043 13 1.73478 13 2V3ZM2.618 4L2.5 4.059V13C2.5 13.2652 2.60536 13.5196 2.79289 13.7071C2.98043 13.8946 3.23478 14 3.5 14H9.5C9.76522 14 10.0196 13.8946 10.2071 13.7071C10.3946 13.5196 10.5 13.2652 10.5 13V4.059L10.382 4H2.618ZM1 3V2H12V3H1Z" fill="#666666" />
            </svg>
            <div>{lista.map((item, index) => <Dia key={index} indice={index} ids={dados.days} >{item}</Dia>)}</div>
        </Container>
    )
}
const Daybox = styled.div`
    width: 30px;
    height: 30px;
    color: ${props => props.cor ? '#FFFFFF' : '#DBDBDB'};
    font-size: 20px;
    margin-right: 5px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${props => props.cor ? '#CFCFCF' : '#FFFFFF'};
`

const Container = styled.div`  
    margin-top: 30px;
    height: 91px;
    background: #FFFFFF;
    border-radius: 5px;
    padding: 20px;
    color: #666666;
    font-size: 20px;
    position: relative;

    svg {
        position: absolute;
        right: 10px;
        top: 10px;
    }
    div {
        margin-top: 5px;
        display: flex;
    }
`