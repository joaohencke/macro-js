import yargs from 'yargs';
import commands, { parser, find } from '@macro/core';

const { argv } = yargs;

const COMMAND_ARGS = argv.command || process.env.COMMAND || '';
const INSTRUCTION_DELIMITER = argv.delimiter || process.env.DELIMITER || '$$';

const instructions = COMMAND_ARGS.split(INSTRUCTION_DELIMITER)
  .map(str => parser(str))
  .map(x => x.filter(y => !!y));

console.log('starting');
instructions.map(async commandGroup => {
  for (let i = 0, l = commandGroup.length; i < l; i += 1) {
    const command = commandGroup[i];
    const action = find(command);
    if (action) {
      console.log(`will exec custom action`, new Date());
      const match = command.match(action.pattern);
          await action.fn(match[1]);//eslint-disable-line
    } else {
      console.log(`will press ${command}`, new Date());
      commands.tap(command.toLowerCase());
    }
  }
});
console.log('finished', new Date());
