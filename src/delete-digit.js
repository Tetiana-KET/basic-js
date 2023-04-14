const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 * assert.strictEqual(deleteDigit(152), 52);
 *  assert.strictEqual(deleteDigit(1001), 101);
 * assert.strictEqual(deleteDigit(10), 1);
 *assert.strictEqual(deleteDigit(222219), 22229);
 *  assert.strictEqual(deleteDigit(109), 19);
 * assert.strictEqual(deleteDigit(342), 42);
 * 
 */
function deleteDigit(n) {
  const result = [];
  const str = n.toString();
  for (let digit of str) {
    result.push(+str.replace(digit, ''));
  }
  return Math.max(...result)
}

module.exports = {
  deleteDigit
};
