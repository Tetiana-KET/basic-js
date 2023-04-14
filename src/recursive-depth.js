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
class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1;
    for (let i=0; i< arr.length; i++) {
      if ( Array.isArray(arr[i]))  {
        arr = arr.flat();
        depth += this.calculateDepth(arr);
        return depth;
      }
    }
    return depth;
  }
}

module.exports = {
  DepthCalculator
};
