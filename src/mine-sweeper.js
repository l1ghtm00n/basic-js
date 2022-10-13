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
          console.dir(`1) arr[${i},${j}] = ${i*x+j+1}`);
          arr[i*x+j+1] += 1;
        }
        if (j-1>-1) {
          console.dir(`2) arr[${i},${j}]  = ${i*x+j-1}`);
          arr[i*x+j-1] += 1;
        }
        if (i+1<x) {
          console.dir(`3) arr[${i},${j}]  = ${x+j*y+1}`);
          arr[x*i+j*y+j] += 1;
          if (x*i+j*y+x<x*y) {
            arr[x*i+j*y+j+1] += 1;
          }
        }
        if (i-1>-1) {
          console.dir(`4) arr[${i},${j}]  = ${j*y-1}`);
          arr[j*y-1] += 1;
          if (j*y-x>-1) {
            arr[j*y-x] += 1;
          }
        }    

      }
    }
  }
  console.dir(arr);
}

module.exports = {
  minesweeper
};
