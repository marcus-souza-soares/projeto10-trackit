import GlobalStyle from './GlobalStyle';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from './Login';
import Cadastro from "./Cadastro";

export default function App() {
    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login/>}/>
                    <Route path='/cadastro' element={<Cadastro/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}