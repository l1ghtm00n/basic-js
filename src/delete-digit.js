const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */


function deleteDigit(n) {   
  let dig = String(n).split('');
  let res =[];
  for (let i=0; i<dig.length; i++) {
    if (i===0){
      res.push(dig.slice(1).join(''));
    } else if (i===dig.length-1) {
      res.push(dig.slice(0,dig.length-1).join(''));
    } else {
      res.push((dig.slice(0,i).concat(dig.slice(i+1))).join(''));
    }      
  }
  return Math.max(...res);
}

module.exports = {
  deleteDigit
};
