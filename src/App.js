import { BrowserRouter, Routes, Route } from 'react-router-dom'

import UserContext from './UserContext';
import Login from './Login';
import Cadastro from "./Cadastro";
import { useState } from 'react';
import Hoje from './Hoje';
import Habitos from './Habitos';
import Historico from './Historico';


export default function App() {
    const [config, setConfig] = useState();
    const [porcentagem, setPorcentagem] = useState(0);

    return (
        <>
            <BrowserRouter>
                <UserContext.Provider value={{ config, setConfig, porcentagem, setPorcentagem }}>
                    <Routes>
                        <Route exact path="/" element={<Login />} />
                        <Route exact path="/cadastro" element={<Cadastro />} />
                        <Route exact path="/hoje" element={<Hoje />} />
                        <Route exact path="/habitos" element={<Habitos />} />
                        <Route exact path="/historico" element={<Historico />} />
                    </Routes>
                </UserContext.Provider>
            </BrowserRouter>

        </>
    )
}
