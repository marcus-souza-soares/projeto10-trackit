import GlobalStyle from './GlobalStyle';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import UserContext from './UserContext';
import Login from './Login';
import Cadastro from "./Cadastro";
import { useState } from 'react';

export default function App() {
    const [token, setToken] = useState();

    return (
        <>
            <GlobalStyle />
            <UserContext.Provider value={{ token, setToken }}>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Login />} />
                        <Route path='/cadastro' element={<Cadastro />} />
                    </Routes>
                </BrowserRouter>
            </UserContext.Provider>
        </>
    )
}
