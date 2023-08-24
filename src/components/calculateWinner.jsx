const calculateWinner = (num1, num2, player1, player2) => {
    return num1 > num2 ? player1 : num2 > num1 ? player2 : 'draw';
  };
  
  export default calculateWinner;
  