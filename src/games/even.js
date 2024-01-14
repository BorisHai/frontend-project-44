import playGame from '../index.js';
import getRandomInt from '../../utils/utils.js';
import greetUser from '../cli.js';

const isEven = (num) => num % 2 === 0;

const generateQuestion = () => {
  const randomNumber = getRandomInt(1, 100);
  const question = randomNumber.toString();
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

  return { question, correctAnswer };
};

const userName = greetUser();
playGame('Answer "yes" if the number is even, otherwise answer "no".', generateQuestion, userName);
