import robot from 'robotjs';
import { wait } from './wait';

const dance = async () => {
  robot.keyTap('right', 'command');
  await wait(600);
  robot.keyTap('left', 'command');
  await wait(600);
  robot.keyTap('down', 'command');
  await wait(600);
  robot.keyTap('up', 'command');
};

export default {
  pattern: /DANCE/i,
  fn: dance,
};
