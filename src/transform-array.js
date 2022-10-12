const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let commands = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];
  // let res = [];
  if (Array.isArray(arr)) {
    let l = arr.length;
    let res = arr.slice();
    for (let i=0; i<l; i++) {
      if (arr[i] === commands[0]) {
        if (i+1<l-1) {
          res[i]=null;
          res[i+1]=null;
        } else {
          res[i]=null;
        }
      } else if (arr[i] === commands[1]) {
        if (i>0) {
          res[i-1]=null
          res[i]=null;
        } else {
          res[i]=null;
        }
      } else if (arr[i] === commands[2]) {
        if (i!==l-1) {
          res[i]=res[i+1];
        } else {
          res[i]=null;
        }
      } else if (arr[i] === commands[3]) {
        if (i>0) {
          res[i]=res[i-1];
        } else {
          res[i]=null;
        }
      } 
    }
    const results = [];
    res.forEach(element => {
      if (element !== null) {
        results.push(element);
      }
    });
    return results;
  } else {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
}

module.exports = {
  transform
};
