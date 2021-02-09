import readlineSync from 'readline-sync';
import greeting from './cli.js';

const ATTEMPTS = 3;

export default (game) => {
  const { task, engine } = game;
  const name = greeting();

  console.log(task);
  let attemptsRemaind = ATTEMPTS;

  while (attemptsRemaind > 0) {
    const [question, answer] = engine();

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (answer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      break;
    }

    console.log('Correct!');
    attemptsRemaind -= 1;
  }

  const bye = attemptsRemaind > 0 ? `Let's try again, ${name}!` : `Congratulations, ${name}!`;
  console.log(bye);
};
