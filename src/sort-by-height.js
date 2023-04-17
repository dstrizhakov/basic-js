const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
// Get the indices of all the non-negative numbers in the array
  const indices = arr
    .map((val, index) => (val !== -1 ? index : -1))
    .filter(index => index !== -1);

  // Sort the values at the indices
  const sorted = indices.map(index => arr[index]).sort((a, b) => a - b);

  // Replace the values at the indices with the sorted values
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) {
      arr[i] = sorted[j];
      j++;
    }
  }

  return arr;
}

module.exports = {
  sortByHeight
};
