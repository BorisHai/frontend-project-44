// src/games/gcd.js
import getRandomInt from '../../utils/utils.js';
import playGame from '../index.js';

const findGcd = (num1, num2) => {
  let a = num1;
  let b = num2;

  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }

  return Math.abs(a);
};

const generateQuestion = () => {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);

  const question = `${num1} ${num2}`;
  const correctAnswer = findGcd(num1, num2).toString();

  return { question, correctAnswer };
};

const startGcdGame = () => {
  const description = 'Find the greatest common divisor of given numbers.';
  playGame(description, generateQuestion);
};

export default startGcdGame;
