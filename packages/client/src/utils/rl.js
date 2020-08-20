import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export const question = (text, defaultValue) =>
  new Promise(resolve => rl.question(`${text}\n`, response => resolve(response || defaultValue)));

export const questions = async entries => {
  const answers = [];

  for (let i = 0, l = entries.length; i < l; i += 1) {
    const entry = entries[i];
    // eslint-disable-next-line no-await-in-loop
    const answer = await question(entry.text, entry.defaultAnswer);
    answers.push(answer);
  }

  return answers;
};
