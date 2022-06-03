import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from '../Home/Home';
import { Personagem } from '../Personagem/Personagem';

export default function AppRouter() {

    const [idParametro, setIdaParametro] = useState<number | null>();

    return (
        <Routes>
            <Route path="/" element=
                {<Home setIdaParametro={setIdaParametro} />} />
            <Route path="/personagem"
                element={<Personagem idParametro={idParametro} />} />
        </Routes>
    );
}