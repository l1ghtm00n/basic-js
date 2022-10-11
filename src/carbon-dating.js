const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function dateSample(sampleActivity) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if ((typeof sampleActivity === 'string') && (isNumeric(sampleActivity)) && sampleActivity) {
    let k = +sampleActivity
    if ((k>0) && (k < 15)) {
      let k = 0.693/HALF_LIFE_PERIOD;
      return Math.ceil(Math.log(MODERN_ACTIVITY/(+sampleActivity))/k);
    }

  }
  return false;
}

module.exports = {
  dateSample
};
