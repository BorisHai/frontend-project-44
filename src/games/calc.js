import getRandomInt from '../../utils/utils.js';
import playGame from '../index.js';

const operators = ['+', '-', '*'];
const generateQuestion = () => {
  const num1 = getRandomInt(1, 20);
  const num2 = getRandomInt(1, 20);
  const operator = operators[getRandomInt(0, operators.length - 1)];

  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = eval(question).toString(); // eslint-disable-line no-eval

  return { question, correctAnswer };
};

const startCalcGame = () => {
  const description = 'What is the result of the expression?';
  playGame(description, generateQuestion);
};

export default startCalcGame;
