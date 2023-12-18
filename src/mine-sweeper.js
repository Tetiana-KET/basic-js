const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
	function minesweeper(matrix) {
		const result = [];
		for (let x = 0; x < matrix.length; x += 1) {
			result.push([]);

			for (let y = 0; y < matrix[x].length; y += 1) {
				result[x][y] = 0; // fill every cell with zero

				//top row
				if (matrix[x - 1] !== undefined) {
					if (matrix[x - 1][y]) {
						result[x][y] += 1;
					}
				}

				//bottom row
				if (matrix[x + 1] !== undefined) {
					if (matrix[x + 1][y]) {
						result[x][y] += 1;
					}
				}

				//right edge
				if (matrix[x][y + 1] !== undefined) {
					if (matrix[x][y + 1]) {
						result[x][y] += 1;
					}
				}

				//left edge
				if (matrix[x][y - 1] !== undefined) {
					if (matrix[x][y - 1]) {
						result[x][y] += 1;
					}
				}

				//DIAGONAL
				//top right
				if (matrix[x - 1] !== undefined) {
					if (matrix[x - 1][y + 1]) {
						result[x][y] += 1;
					}
				}

				//top left
				if (matrix[x - 1] !== undefined) {
					if (matrix[x - 1][y - 1]) {
						result[x][y] += 1;
					}
				}
        
				//bottom right
				if (matrix[x + 1] !== undefined) {
					if (matrix[x + 1][y + 1]) {
						result[x][y] += 1;
					}
				}

				//bottom left
				if (matrix[x + 1] !== undefined) {
					if (matrix[x + 1][y - 1]) {
						result[x][y] += 1;
					}
				}
			}
		}
		return result;
	}

module.exports = {
  minesweeper
};
