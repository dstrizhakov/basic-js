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
 *
 */
function deleteDigit(n) {
  // throw new NotImplementedError('Not implemented');
	  const numStr = n.toString(); // Convert number to string for easier manipulation
    let maxNum = -Infinity; // Start with an arbitrarily low max number

    for (let i = 0; i < numStr.length; i++) {
      // Remove the i-th digit from the string
      const newNumStr = numStr.slice(0, i) + numStr.slice(i + 1);
      const newNum = parseInt(newNumStr); // Convert the new string back to a number
      if (newNum > maxNum) {
        maxNum = newNum; // Update max number if the new number is greater
      }
    }

    return maxNum;
 
}

module.exports = {
  deleteDigit
};
