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
 * calculateDepth method must pass the given array recursively. Depth of a flat array is 1. 
 * Method must correctly work with arrays that contain no elements or contain empty arrays.
 */
// function list_depth(arr) {
//   let n = 1;
//   for (i of arr) {
//     if (Array.isArray(i)) {
//       n += list_depth(i);
//       console.log(n);
//     }
//   }
//   return n
class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1;
    for (let item of arr) {
      if ( Array.isArray(item))  {
        const newArr = arr.flat();
        this.calculateDepth(newArr);
        depth ++
      }
    }
    return depth;
  }
}

module.exports = {
  DepthCalculator
};
