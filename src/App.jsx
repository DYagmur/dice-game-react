import React from 'react';
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

  );
}

export default App;
