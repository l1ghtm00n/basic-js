const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  max = 1;
  calculateDepth(arr) {   
    console.log(count);
    let count = 1;
    console.log(count);
    for (let el of arr) {
      if (Array.isArray(el)) {
        count=1+this.calculateDepth(el);
      }     
    }

    return count;
  }
}

module.exports = {
  DepthCalculator
};
