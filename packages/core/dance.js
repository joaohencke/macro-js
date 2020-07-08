import robot from 'robotjs';
import os from 'os';
import { wait } from './wait';

const dance = async () => {
  const platform = os.platform();
  let modifier = 'control';

  if (platform === 'darwin') modifier = 'command';

  robot.keyTap('right', modifier);
  await wait(600);
  robot.keyTap('left', modifier);
  await wait(600);
  robot.keyTap('up', modifier);
  await wait(600);
  robot.keyTap('down', modifier);
};

export default {
  pattern: /DANCE/i,
  fn: dance,
};
