import wait from './wait';
import parser from './parser';
import tap from './tap';
import dance from './dance';

const commands = {
  tap,
  executables: [wait, dance],
};

const find = pattern => commands.executables.find(x => x.pattern.test(pattern));

export default commands;

export { parser, find };
