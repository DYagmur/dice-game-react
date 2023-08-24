import React from 'react';
import Game from './components/Game.jsx';
import './components/Dice.jsx';
import Header from "./components/Header";
import {Roulette} from './components/Roulette';

import "./App.css";

function App() {
  return (
    <div className="app p-4">
      <Header />
      <Game player1="Player 1" player2="Player 2" />
      <Roulette />
    </div>

  );
}

export default App;
