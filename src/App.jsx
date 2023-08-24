import React from 'react';
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
  );
}

export default App;
