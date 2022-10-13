const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let revEl ='';
  let res = {};
  let index =0;
  let elDom = '';
  for (let el of domains) {
    revEl = '.' + el.split('.').reverse().join('.');
    for (let i=0; i<revEl.length;i++) {
      if (revEl[i]==='.') {
        index = revEl.slice(i+1).indexOf('.');
        if (index===-1) {
          index = revEl.length;
        }
        elDom = revEl.slice(0,i+index+1);
        if (res[elDom]===undefined) {
          res[elDom] = 1;
        } else {
          res[elDom] += 1;
        }
      }
    }
  }  
  return res;
}

module.exports = {
  getDNSStats
};
