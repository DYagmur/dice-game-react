// Game.jsx
import React, { useState } from 'react';
import Dice from './Dice';
import PlayersNames from './PlayersNames';
import './Game.css';

const Game = () => {
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');
  const [dice1, setDice1] = useState(1);
  const [dice2, setDice2] = useState(1);
  const [scores, setScores] = useState({ [player1]: 0, [player2]: 0 });

  const rollDice = async () => {
    try {
      const response = await fetch('http://localhost:8000/index', {
        method: 'GET',
        headers: {
          task: 'index',
        },
      });

      if (!response.ok) {
        throw new Error('Rolling dice failed.');
      }

      const data = await response.json();

      const randomNumber1 = data.roll.randomNumber1;
      const randomNumber2 = data.roll.randomNumber2;

      setDice1(randomNumber1);
      setDice2(randomNumber2);

      const winner = calculateWinner(randomNumber1, randomNumber2);

      if (winner === player1) {
        setScores((prevScores) => ({
          ...prevScores,
          [player1]: prevScores[player1] + 1,
        }));
      } else if (winner === player2) {
        setScores((prevScores) => ({
          ...prevScores,
          [player2]: prevScores[player2] + 1,
        }));
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  const calculateWinner = (num1, num2) => {
    return num1 > num2 ? player1 : num2 > num1 ? player2 : 'draw';
  };

  const handleStartGame = (name1, name2) => {
    setPlayer1(name1);
    setPlayer2(name2);
  };

  return (
    <div className="game">
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
        <p>{player1} Score: {scores[player1]}</p>
        <p>{player2} Score: {scores[player2]}</p>
      </div>
    </div>
  );
};

export default Game;
