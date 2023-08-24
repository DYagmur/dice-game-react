<<<<<<< HEAD
import React from 'react';
import { Dice } from './Dice'; // Use relative path
import { Header } from "./Header"; // Use relative path
import { Footer } from "./Footer"; // Use relative path
import { Main } from "./Main"; // Use relative path
import { Game } from "./Game"; // Use relative path

=======
import Header from "./components/Header";
import { Footer } from "./components/Footer";
import { Main } from "./components/Main";
>>>>>>> 04f45e3a86202e9a6dc89dda9a7374f93a69c27f
import "./App.css";

function App() {
  return (
    <>
<<<<<<< HEAD
      <Header />
      <Main />
      <Footer />
      <div className="app p-4">
        <Game player1="Player 1" player2="Player 2" />
        <Dice />
      </div>
=======
        <Header />
        <Main />
        <Footer />
>>>>>>> 04f45e3a86202e9a6dc89dda9a7374f93a69c27f
    </>
  );
}

export default App;
