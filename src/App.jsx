import React from 'react';
import Game from './components/Game.jsx';
import './components/Dice.jsx';

import "./App.css";

function App() {
  return (
    <div className="app p-4">
      <Game player1="Player 1" player2="Player 2" />
    </div>
  );
}

export default App;
