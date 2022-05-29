import Header from "./components/Header";
import Footer from "./components/Footer";
import { useContext } from "react";

import UserContext from "./UserContext";

export default function Historico() {
    const { porcentagem } = useContext(UserContext)
    return (
        <>
            <Header />
            <Footer porcentagem={porcentagem}/>
        </>

    )
}