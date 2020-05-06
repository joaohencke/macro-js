const parser = (commands = '') =>
  commands
    .replace(/{/g, '')
    .replace(/}/g, ',')
    .split(',');

export default parser;
