import React from 'react';

const Dice = ({ number }) => {
  return <img src={`/images/dice${number}.png`} alt={`Dice ${number}`} className="dice" />;
};

export default Dice;
