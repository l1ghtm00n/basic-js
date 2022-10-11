const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (Array.isArray(members)) {
    let teamNames = [];
    for (let name of members) {
      if (typeof name === 'string') {
        teamNames.push(name.trim()[0].toUpperCase());
      }
    }
    if (teamNames) {
      teamNames.sort(function(a,b) { return a.charCodeAt(0)-b.charCodeAt(0);});
      return teamNames.join('');
    }
  }
  return false;
}

module.exports = {
  createDreamTeam
};
