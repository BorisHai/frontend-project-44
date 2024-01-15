import playGame from '../index.js';
import getRandomInt from '../../utils/utils.js';

const isEven = (num) => num % 2 === 0;

const generateQuestion = () => {
  const randomNumber = getRandomInt(1, 100);
  const question = randomNumber.toString();
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

  return { question, correctAnswer };
};

const startEvenGame = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  playGame(description, generateQuestion);
};

export default startEvenGame;
