const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

export { wait };

export default {
  fn: wait,
  pattern: /WAITMS:?(\d{0,})/i,
};
