import React from 'react';
import Game from './Game';
import { Roulette } from './Roulette';
import { Routes, Route, Link } from "react-router-dom"
import Login from './Login.jsx';


export function Main() {
    return(        
        <>
            
            <Routes>
                <Route path="login" element={ <Login/> } />
                <Route path="dice" element={ <Game/> } />
                <Route path="roulette" element={ <Roulette />} />
            </Routes>
        </>
    )
}