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
  calculateDepth(arr) {  
    let count =1;
    let max = 1;  
    for (let el of arr) {
      if (Array.isArray(el)) {
        count = 1+this.calculateDepth(el); 
        max = Math.max(max,count);
      }    
    }
    return max;
  }
}

module.exports = {
  DepthCalculator
};
