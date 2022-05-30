import styled from 'styled-components'
import axios from 'axios';
import { useState } from 'react';

export default function Habito({dados, config, render, setRender,setConfig}) {

    const [done, setDone] = useState(dados.done);
    const [atual, setAtual] = useState(dados.currentSequence)
    const [record, setRecord] = useState(dados.highestSequence)

    function Marcar(){
        console.log(config)
        setConfig({...config})
        if (dados.done === false){
            
            const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${dados.id}/check`, {},config);

            promise.then(res => {
                console.log(res.data)
                setDone(true);
                setRender(!render)
            })
            
        }else{
            
            const uncheck = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${dados.id}/uncheck`, {}, config);
            uncheck.then(() => {
                console.log('desmarcado')
                setDone(false);
                setRender(!render)
            })
            
        }
        
        setAtual(dados.currentSequence)
        setRecord(dados.highestSequence)
    }
    return (
        <Container >
            <div className='texto'>
                <h1>{dados.name}</h1>
                <div><h2>Sua sequencia atual: <Atual status={done}>{atual} dias</Atual></h2></div>
                <div><h2>Seu recorde: <Record status={done} atual={atual} record={record}>{record} dias</Record></h2></div>
            </div>
            <Check status={done} onClick={Marcar}>
                <svg width="36" height="28" viewBox="0 0 36 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M29.5686 0.956629C30.1694 0.350274 30.9857 0.00637472 31.8392 8.77323e-05C32.6928 -0.00619925 33.5141 0.325638 34.1237 0.923077C34.7333 1.52052 35.0816 2.33498 35.0926 3.18846C35.1035 4.04195 34.7761 4.86506 34.182 5.4779L16.9915 26.9682C16.6962 27.2862 16.3398 27.5413 15.9437 27.7185C15.5476 27.8957 15.1198 27.9912 14.6859 27.9994C14.252 28.0076 13.821 27.9283 13.4184 27.7662C13.0159 27.6041 12.6502 27.3625 12.3431 27.0559L0.945601 15.6628C0.339937 15.0569 -0.000205509 14.2351 9.31541e-08 13.3784C0.000205695 12.5216 0.340743 11.7001 0.946698 11.0944C1.55265 10.4887 2.37439 10.1486 3.23113 10.1488C4.08788 10.149 4.90945 10.4895 5.51511 11.0955L14.5292 20.1117L29.4831 1.05749C29.5103 1.02282 29.5396 0.989868 29.5708 0.958822L29.5686 0.956629Z" fill="white" />
                </svg>
            </Check >
        </Container>
    )
}
const Record = styled.span`
    color: ${props => props.status && props.atual === props.record ? '#8FC549' : '#666666'};
`
const Atual = styled.span`
    color: ${props => props.status ? '#8FC549' : '#666666'};
`
const Container = styled.div`
    display: flex;
    background-color: #FFFFFF;
    color: #666666;
    height: 94px;
    width: 100%;
    border-radius: 5px;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    margin-bottom: 10px;
    .texto{
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        div{
            width: 100%;
            display: flex;
            flex-direction: row;
        }
    }
    h1{
        font-size: 20px;
    }
    h2{
        font-size: 13px;
    }
    

`
const Check = styled.div`
    width: 69px;
    height: 69px;
    background: ${props => props.status ? '#8FC549' : '#EBEBEB'};
    border: 1px solid #E7E7E7;
    border-radius: 5px;
    
    display: flex;
    align-items: center;
    justify-content: center;
`
