import React, { useState } from 'react';
import Dice from './Dice';
import PlayersNames from './PlayersNames';
<<<<<<< HEAD
import './Game.css';
import calculateWinner from './calculateWinner';
=======
import '../styles/Game.css';
>>>>>>> 04f45e3a86202e9a6dc89dda9a7374f93a69c27f

const Game = () => {
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');
  const [dice1, setDice1] = useState(1);
  const [dice2, setDice2] = useState(1);
  const [scores, setScores] = useState({});

  const rollDice = async () => {
    try {
      const response = await fetch('http://localhost:8000/duygu', {
        method: 'GET',
        headers: {
          "task": 'duygu'
        }
      });
  
      const data = await response.json();
  
      const randomNumber1 = data.heightNode;
      const randomNumber2 = data.startPoint;
  
      setDice1(randomNumber1);
      setDice2(randomNumber2);
  
      const winner = calculateWinner(randomNumber1, randomNumber2);
  
      if (winner === player1) {
        setScores((prevScores) => ({
          ...prevScores,
          [player1]: (prevScores[player1] || 0) + 1,
        }));
      } else if (winner === player2) {
        setScores((prevScores) => ({
          ...prevScores,
          [player2]: (prevScores[player2] || 0) + 1,
        }));
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };
  

  const handleStartGame = (name1, name2) => {
    setPlayer1(name1);
    setPlayer2(name2);
    setScores({ [name1]: 0, [name2]: 0 });
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
