import React from 'react';
import Game from './Game.jsx';
import { Routes, Route, Link } from "react-router-dom"
import { useContext, useState } from 'react'

export function Main() {
    return(
        <>
            <nav className="item2 m-auto z-0">
                <div className='fancysmallborder relative'>
                <div className='flex flex-col list-none bg-[#12191c] rounded-tl-md'>
                    <Link to="game" className='p-3'>DICE</Link>
                    
                </div>

                </div>
            </nav>
            <div className='item3 my-auto'>
                <Routes>
                    <Route path="game" element={ <Game/> } />
                </Routes>
            </div>
        </>
    )
}