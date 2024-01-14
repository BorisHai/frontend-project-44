// src/games/prime.js
import getRandomInt from '../../utils/utils.js';
import playGame from '../index.js';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const generateQuestion = () => {
  const number = getRandomInt(1, 100);
  const question = number.toString();
  const correctAnswer = isPrime(number) ? 'yes' : 'no';

  return { question, correctAnswer };
};

const startPrimeGame = () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  playGame(description, generateQuestion);
};

export default startPrimeGame;
