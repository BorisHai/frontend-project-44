import readlineSync from 'readline-sync';

const playGame = (description, generateQuestion) => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!\n${description}`);

  const roundsCount = 3;

  for (let i = 0; i < roundsCount; i += 1) {
    const { question, correctAnswer } = generateQuestion();

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${playerName}!`);
};

export default playGame;
