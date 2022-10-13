const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */

function isDate(d) {
  try {
    return d instanceof Date && !isNaN(d.valueOf());    
  } catch (error) {
    throw  new Error('Invalid date!');  
  }  
}

function getSeason(date) {
  let seasons = {'winter' : [11,0,1] ,'spring' : [2,3,4], 'summer' : [5,6,7],'autumn' : [8,9,10]};
  if (arguments.length>0) {
      if (isDate(date)) {
        let month = date.getMonth();
          for (let key in seasons) {
            if ( seasons[key].includes(month)) {
              return key;
            }
          }
      } else {
        throw  new Error('Invalid date!');
      }    
  } else {
    return 'Unable to determine the time of year!';
  }
}

module.exports = {
  getSeason
};
