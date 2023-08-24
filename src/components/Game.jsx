import React, { useState } from 'react';
import Dice from './Dice';
import PlayersNames from './PlayersNames';
import '../styles/Game.css';

const Game = () => {
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');
  const [dice1, setDice1] = useState(1);
  const [dice2, setDice2] = useState(1);
  const [scores, setScores] = useState({}); // Initial scores state

  const rollDice = async () => {
    try {
      const response = await fetch('http://localhost:8000/duygu', {
        method: 'GET',
        headers: {
          task: 'duygu',
        },
      });

      if (!response.ok) {
        throw new Error('Rolling dice failed.');
      }

      const data = await response.json();

      if (data.roll && data.roll.randomNumber1 && data.roll.randomNumber2 && data.result) {
        const randomNumber1 = data.roll.randomNumber1;
        const randomNumber2 = data.roll.randomNumber2;

        setDice1(randomNumber1);
        setDice2(randomNumber2);

        const roundWinner = randomNumber1 > randomNumber2 ? player1 : player2;
        updateScores(roundWinner); // Update scores based on the round winner
      } else {
        console.error('Data from the server is incomplete or invalid.');
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  const updateScores = (winner) => {
    setScores((prevScores) => ({
      ...prevScores,
      [winner]: (prevScores[winner] || 0) + 1,
    }));
  };

  const handleStartGame = (name1, name2) => {
    setPlayer1(name1);
    setPlayer2(name2);
    setScores({ [name1]: 0, [name2]: 0 }); // Initialize scores for players
  };

  return (
    <div className="game">
      <h1 className="title">🎲 Take a Chance!  🎲</h1>
      <PlayersNames onChange={handleStartGame} />
      <div className="players">
        <p className="player">{player1}</p>
        <p className="player">{player2}</p>
      </div>
      <div className="dice-container">
        <Dice number={dice1} />
        <Dice number={dice2} />
      </div>
      <button className="roll-button" onClick={rollDice}>
        Roll the Dice
      </button>
      <div className="scoreboard">
        <div className="board">
          <h2 className="boardi">Score Board</h2>
        </div>
        <p>{player1} Score: {scores[player1] || 0}</p>
        <p>{player2} Score: {scores[player2] || 0}</p>
      </div>
    </div>
  );
};

export default Game;
