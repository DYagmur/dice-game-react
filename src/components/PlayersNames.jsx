import React, { useState } from 'react';

const PlayersNames = ({ onChange }) => {
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'player1') {
      setPlayer1(value);
    } else if (name === 'player2') {
      setPlayer2(value);
    }
  };

  return (
    <div className="players-names">
      <input type="text" name="player1" placeholder="Player 1" value={player1} onChange={handleInputChange} />
      <input type="text" name="player2" placeholder="Player 2" value={player2} onChange={handleInputChange} />
      <button onClick={() => onChange(player1, player2)}>Start Game</button>
    </div>
  );
};

export default PlayersNames;
