const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2], - j
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ] i
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0;
  let columnCount = matrix[0].length; // сколько вообще у нас колонок (количество элементов строки)
  
  
  for (let i = 0; i < columnCount; i++) {// column

    for (let j = 0; j < matrix.length; j++) { // row - matrix.length
    
      if (matrix[j][i] === 0) {
        break;
      } else {

        sum += matrix[j][i];
      }
    }
  }
  return sum;
}

module.exports = {
  getMatrixElementsSum
};
