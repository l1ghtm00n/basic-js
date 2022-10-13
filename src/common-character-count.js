const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function sort(str) {
  return str.split('').sort(function(a,b){return a.charCodeAt(0)-b.charCodeAt(0)}).join('');
}

function getCommonCharacterCount(s1, s2) {
  let str1 =sort(s1);
  let str2 =sort(s2);
  let setS1 = new Set(str1.split(''));
  let setS2 = new Set(str2.split(''));
  let len = setS1.size > setS2.size ? setS1.size : setS2.size;
  let res =0;
  let fi1 = 0;
  let li1 = 0;
  let fi2 = 0;
  let li2 = 0;
  for (let i=0; i<len;i++) {
    if (setS1.has([...setS2][i])) {
      fi1 = str1.indexOf([...setS2][i]);
      li1 = str1.lastIndexOf([...setS2][i]);
      fi2 = str2.indexOf([...setS2][i]);
      li2 = str2.lastIndexOf([...setS2][i]);
      res+= 1+Math.min(li1-fi1,li2-fi2);
    }
  }
  return res;

}

module.exports = {
  getCommonCharacterCount
};
