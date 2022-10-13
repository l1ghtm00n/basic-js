const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let count = 1;
  let res = '';
  for (let i=1;i<str.length;i++) {
    if (str[i]===str[i-1]) {
      count+=1;
      if (i===str.length-1) {
        res += String(count)+str[i-1];         
      }
    } else {
      if (count > 1) {
        res += String(count)+str[i-1];
        count = 1;
      } else {
        res += str[i-1];
      }
      if (i===str.length-1) {
        res += str[i];          
      }
    }
  }
  return res;
}

module.exports = {
  encodeLine
};
