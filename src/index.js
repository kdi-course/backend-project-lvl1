import readlineSync from 'readline-sync';
import greeting from './cli.js';

const ROUNDS_COUNT = 3;

export default (title, generateRound) => {
  const name = greeting();
  console.log(title);

  for (let i = 1; i <= ROUNDS_COUNT; i += 1) {
    const [question, answer] = generateRound();

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = typeof answer !== 'string' ? String(answer) : answer;

    if (correctAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};
