const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  // Find the last occurrence of the "@" character
  const lastIndex = email.lastIndexOf("@");
  // Return the domain substring starting from the "@" character
  return email.substring(lastIndex + 1);
}

module.exports = {
  getEmailDomain
};
