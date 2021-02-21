import { generateRandomNumber, makeProgression } from '../utils.js';

const PROGRESSION_SIZE = 10;
const FIRST_RANGE_MIN = 1;
const FIRST_RANGE_MAX = 20;
const STEP_RANGE_MIN = 1;
const STEP_RANGE_MAX = 10;
const placeholder = '..';

export default () => {
  const first = generateRandomNumber(FIRST_RANGE_MIN, FIRST_RANGE_MAX);
  const step = generateRandomNumber(STEP_RANGE_MIN, STEP_RANGE_MAX);

  const progression = makeProgression(first, step, PROGRESSION_SIZE);

  const placeholderIndex = generateRandomNumber(0, PROGRESSION_SIZE - 1);
  const answer = progression[placeholderIndex];
  progression[placeholderIndex] = placeholder;

  const question = progression.join(' ');

  return [question, answer];
};
