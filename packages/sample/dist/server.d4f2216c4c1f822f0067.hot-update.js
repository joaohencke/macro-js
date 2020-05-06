exports.id = "server";
exports.modules = {

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _yargs = __webpack_require__(/*! yargs */ "yargs");

var _yargs2 = _interopRequireDefault(_yargs);

var _core = __webpack_require__(/*! @macro/core */ "../core/index.js");

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const {
  argv
} = _yargs2.default;
const COMMAND_ARGS = argv.command || process.env.COMMAND || '';
const INSTRUCTION_DELIMITER = argv.delimiter || process.env.DELIMITER || '$$';
const instructions = COMMAND_ARGS.split(INSTRUCTION_DELIMITER).map(str => (0, _core.parser)(str)).map(x => x.filter(y => !!y));
console.log('starting');
instructions.map(async commandGroup => {
  for (let i = 0, l = commandGroup.length; i < l; i += 1) {
    const command = commandGroup[i];
    const action = (0, _core.find)(command);

    if (action) {
      console.log(`will exec custom action`, new Date());
      const match = command.match(action.pattern);
      await action.fn(match[1]); //eslint-disable-line
    } else {
      console.log(`will press ${command}`, new Date());

      _core2.default.tap(command.toLowerCase());
    }
  }
});
console.log('finished', new Date());

/***/ })

};
//# sourceMappingURL=server.d4f2216c4c1f822f0067.hot-update.js.map