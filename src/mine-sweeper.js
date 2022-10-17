const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let x = matrix.length;
  let y = matrix[0].length;
  let arr = new Array(x*y);
  arr.fill(0,0);
  for(let i=0; i< x; i++) {
    for(let j=0; j< y; j++) {
      if (matrix[i][j]) {
        if (j+1<y) {
          arr[j+x*i+y] += 1;
          if (i+1<x) {
            arr[j+x*i+y+1] += 1;            
          }
          if (i-1>-1) {
            arr[j+x*i+y-1] += 1;            
          }
        }
        if (j-1>-1) {
          arr[j+x*i-y] += 1;  
          if (i+1<x) {
            arr[j+x*i-y+1] += 1;            
          }
          if (i-1>-1) {
            arr[j+x*i-y-1] += 1;            
          } 
        }
        if (i+1<x) {
          arr[i+j*y+1] += 1;
        }
        if (i-1>-1) {
          arr[i+j*y-1] += 1;
        }    
      }
    }
  }
  let res = [];
  let tArr;
  for(let i=0; i< x; i++) {
    tArr = [];
    for(let j=0; j< y; j++) {
      tArr.push(arr[i*y+j]);    
    }
    res.push(tArr);
  }
  return res;
}

module.exports = {
  minesweeper
};
