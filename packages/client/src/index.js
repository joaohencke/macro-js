import commands, { parser, find } from '@macro/core';
import { questions } from './utils/rl';

const DEFAULTS = {
  serverSaveTime: '05:00',
  endTodayAnswer: 'NO',
  delimiter: '|',
  command:
    '{WAITMS:300}{F2}{WAITMS:2000}{F5}{WAITMS:2000}{F5}{WAITMS:2000}{F6}{WAITMS:120000}|{WAITMS:1200}{F3}{WAITMS:10000}{F4}{WAITMS:85000}|{DANCE}{WAITMS:600000}',
};

async function start() {
  const [command, delimiter, serverSaveTime, endTodayAnswer] = await questions([
    { text: 'Type the command to be executed', defaultAnswer: DEFAULTS.command },
    { text: 'Type delimiter', defaultAnswer: DEFAULTS.delimiter },
    { text: 'Server save time (local time)? (HH:mm)', defaultAnswer: DEFAULTS.serverSaveTime },
    { text: 'The application should stop TODAY? (y/N)', defaultAnswer: DEFAULTS.endTodayAnswer },
  ]);

  const endToday = ['S', 'Y'].includes(endTodayAnswer.substr(0, 1).toUpperCase());

  const stopDate = new Date();

  stopDate.setHours(...serverSaveTime.split(':'), 0, 0);

  if (!endToday) stopDate.setDate(stopDate.getDate() + 1);

  const instructions = command
    .split(delimiter)
    .map(str => parser(str))
    .map(x => x.filter(y => !!y));

  instructions.map(async commandGroup => {
    while (new Date() < stopDate) {
      for (let i = 0, l = commandGroup.length; i < l; i += 1) {
        const instruction = commandGroup[i];
        const action = find(instruction);
        if (action) {
          console.log(`Executing custom action`, new Date());
          const match = instruction.match(action.pattern);
          // eslint-disable-next-line no-await-in-loop
          await action.fn(match[1]);
        } else {
          console.log(`Will press ::${instruction}::`);
          commands.tap(instruction.toLowerCase());
        }
      }
    }
  });
}

setTimeout(start, 1000);
