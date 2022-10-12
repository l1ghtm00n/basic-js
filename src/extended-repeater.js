const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (!('repeatTimes' in options)) {
    options.repeatTimes = 1;
  }

  if (!('additionRepeatTimes' in options)) {
    options.additionRepeatTimes = 1;
  }

  if (!('separator' in options)) {
    options.separator = '+';
  }

  if (!('additionSeparator' in options)) {
    options.additionSeparator = '|';
  }
  let add = '';
  if ('addition' in options) {
     add = new Array(options.additionRepeatTimes).fill(String(options.addition)).join(String(options.additionSeparator));
  } 
  console.dir(add);
  let res = new Array(options.repeatTimes).fill(str+add).join(String(options.separator));
  return res;
}

module.exports = {
  repeater
};
