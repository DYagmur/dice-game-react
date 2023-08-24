import React from 'react';
<<<<<<< HEAD
import Game from './components/Game.jsx';
import './components/Dice.jsx';
import Header from "./components/Header";
import {Roulette} from './components/Roulette';
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <div>
      <Game player1="Player 1" player2="Player 2" />
      <h1 className='text-center'>Roulette</h1>
      <Roulette />
      </div>
      <Footer />
    </div>

=======
import Header from './components/Header';
import { Footer } from './components/Footer';
import { Main } from './components/Main';
import Game from './components/Game'; 
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Main />
      <div className="app p-4">
        <Game player1="Player 1" player2="Player 2" />
        {/* <Roulette /> Remove this line */}
      </div>
      <Footer />
    </>
>>>>>>> master
  );
}

export default App;
