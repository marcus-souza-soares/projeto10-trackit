import axios from "axios"
import { useContext, useEffect } from "react"
import UserContext from "./UserContext"
import styled from "styled-components"

import Header from "./components/Header"
import Footer from "./components/Footer"
import { useNavigate } from "react-router-dom"

export default function Habitos(){
    const navigate = useNavigate();
    const { config } = useContext(UserContext)

    const body = {
        name: 'Domir cedo',
        days: [0,1,2,3,4,5,6]
    }    
    const Criar = () =>{
        const promisse = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', body, config)
        promisse.then(res => {
            console.log(res.data)
            console.log(config)
        })
        promisse.catch(() => navigate('/login'))
    }
    return(
        <>
            <Header />
            <Novo>
                <h1>Meus hábitos</h1>
            </Novo>
            <Footer />
        </>
    )
}
const Novo = styled.div`

`