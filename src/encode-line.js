const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(s) {

  let result = '';
  let count =1;

  //loop through all the letters of the string and compare each pair of two consecutive letters:
  for (let i = 0; i < s.length; i++) {

      if (s[i] === s[i+1]) {
          count++;
      } else {// if the current letter s[i] and the next letter s[i+1] is different
          result = result + (count + s[i]);
          count = 1;//We also need to reset count
      }
      
  }
  return result.replace(/1/g, '');
}

module.exports = {
  encodeLine
};
