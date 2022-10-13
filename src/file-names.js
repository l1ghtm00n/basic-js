const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let tempArr=[];
  let index= -1;
  let suffix = {};
  let res = [];
  if (names[0]!== undefined) {
    res.push(names[0]);
  }  
  for (let i=1; i<names.length;i++) {
    tempArr = res.slice(0,i);
    index = tempArr.indexOf(names[i]);
    if (index !== -1) {
      if (suffix[names[i]]===undefined) {
        suffix[names[i]] = 1;
      } else {
        suffix[names[i]] += 1;
      }
      res.push(names[i]+`(${suffix[names[i]]})`);
    } else {
      res.push(names[i]);
    }
  }
  return res;

}

module.exports = {
  renameFiles
};
