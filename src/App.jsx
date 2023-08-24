import React from 'react';
import { Dice } from './Dice'; // Use relative path
import { Header } from "./Header"; // Use relative path
import { Footer } from "./Footer"; // Use relative path
import { Main } from "./Main"; // Use relative path
import { Game } from "./Game"; // Use relative path

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
      <div className="app p-4">
        <Game player1="Player 1" player2="Player 2" />
        <Dice />
      </div>
    </>
  );
}

export default App;
