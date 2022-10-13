const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function sumArr (arr) {
  return arr.reduce((a, b) => a + b, 0);
}

function getMatrixElementsSum(matrix) {
  let p0 = matrix[0].indexOf(0);
  let sum = sumArr(matrix[0]);
  let tempArr = [];
  for (let i=1; i< matrix.length; i++) {
    if (p0 === -1) {
      sum += sumArr(matrix[i]);
    } else {
      tempArr = matrix[i].slice(0);
      for (let j=0; j<matrix[i-1].length; j++) {
        if (matrix[i-1][j]!==0){
          sum += tempArr[j];
        } 
      }      
    }
    p0 = matrix[i].indexOf(0);
  }
  return sum;
}


module.exports = {
  getMatrixElementsSum
};
