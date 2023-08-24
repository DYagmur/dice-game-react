import React from 'react';
import Game from './Game.jsx';
import { Roulette } from './Roulette.jsx';
import { Routes, Route, Link } from "react-router-dom"
import Login from './Login.jsx';

export function Main() {
    return(
        <>
            <nav className="item2 m-auto z-0">
                <div className='fancysmallborder relative'>
                <div className='flex flex-col list-none bg-[#12191c] rounded-tl-md'>
                    <Link to="login" className='p-3'>Login</Link>
                    <Link to="dice" className='p-3'>DICE</Link>
                    <Link to="roulette" className='p-3'>ROULETTE</Link>
                    <Link to="ghostleg" className='p-3'>GHOSTLEG</Link>
                </div>

                </div>
            </nav>
            <div className='item3 my-auto'>
                <Routes>
                    <Route path="login" element={<Login/>} />
                    <Route path="dice" element={ <Game/> } />
                    <Route path="roulette" element={ <Roulette />} />
                </Routes>
            </div>
        </>
    )
}