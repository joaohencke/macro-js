const robot = require('robotjs');

// Type "Hello World".
robot.typeString('Hello World');

// Press enter.
robot.keyTap('enter');

// import yargs from 'yargs';
// import robot from 'robotjs';
// // {F2}{WAITMS:100}{F1}{WAITMS:60}{F1}{WAITMS:100}{F1}{WAITMS:100}{F1}{WAITMS:60}{WAITMS:60}{F3}{WAITMS:60}

// const { argv } = yargs;

// const commandArgs = '{a}'; // argv.command || process.env.COMMAND || '';

// const commands = commandArgs
//   .replace(/{/g, '')
//   .replace(/}/g, ',')
//   .split(',');

// const AVAIABLE_COMMANDS = ['WAITMS'];

// const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

// (async () => {
//   for (let i = 0, l = commands.length; i < l; i += 1) {
//     const command = commands[i];
//     if (!command) continue; //eslint-disable-line
//     if (AVAIABLE_COMMANDS.findIndex(x => command.includes(x)) >= 0) {
//       // await sleep() // retrieve ms
//     } else {
//       // key press
//       console.log(robot.getScreenSize());
//       console.log(command.toLowerCase());
//       console.log('exec');
//     }
//   }
// })();
