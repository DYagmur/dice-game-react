import React from 'react';
import Game from './Game.jsx';
import { Roulette } from './Roulette.jsx';
import { Routes, Route, Link } from "react-router-dom"
import Login from './Login.jsx';


export function Main() {
    return(        
        <>
            <Login />
            <Routes>
                <Route path="login" element={ <Login/> } />
                <Route path="dice" element={ <Game/> } />
                <Route path="roulette" element={ <Roulette />} />
            </Routes>
        </>
    )
}