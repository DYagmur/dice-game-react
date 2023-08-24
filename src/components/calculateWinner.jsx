const calculateWinner = (num1, num2) => {
    return num1 > num2 ? 'Player 1' : num2 > num1 ? 'Player 2' : 'draw';
  };
  
  export default calculateWinner;
  