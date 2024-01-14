// src/games/progression.js
import getRandomInt from '../../utils/utils.js';
import playGame from '../index.js';

const generateProgression = (length, step) => {
  const progression = [];
  let current = getRandomInt(1, 50);

  for (let i = 0; i < length; i += 1) {
    progression.push(current);
    current += step;
  }

  return progression;
};

const generateQuestion = () => {
  const progressionLength = getRandomInt(5, 10);
  const progressionStep = getRandomInt(2, 5);
  const progression = generateProgression(progressionLength, progressionStep);

  const hiddenIndex = getRandomInt(0, progressionLength - 1);
  const correctAnswer = progression[hiddenIndex].toString();
  progression[hiddenIndex] = '..';

  const question = progression.join(' ');

  return { question, correctAnswer };
};

const startProgressionGame = () => {
  const description = 'What number is missing in the progression?';
  playGame(description, generateQuestion);
};

export default startProgressionGame;
