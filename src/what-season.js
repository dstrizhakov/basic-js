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
function getSeason(date) {
  throw new NotImplementedError("Not implemented");

    if (!date) {
      return "Unable to determine the time of year!";
    }

    if (
      Object.prototype.toString.call(date) !== "[object Date]" ||
      isNaN(date.getTime())
    ) {
      throw new Error("Invalid date!");
    }

  	if (Object.getPrototypeOf(date) !== Date.prototype) {
      throw new Error("Invalid date!");
    }

  	if (
      !(date instanceof Date) ||
      isNaN(date.getTime()) ||
      typeof date.getMonth !== "function" ||
      typeof date.getFullYear !== "function" ||
      typeof date.getDate !== "function" ||
      typeof date.getHours !== "function" ||
      typeof date.getMinutes !== "function" ||
      typeof date.getSeconds !== "function" ||
      typeof date.getMilliseconds !== "function" ||
      typeof date.getDay !== "function"
    ) {
      throw new Error("Invalid date!");
    }

  	const dateString = date.toISOString().substring(0, 10);
    const pattern = /^\d{4}-\d{2}-\d{2}$/;
    if (!pattern.test(dateString)) {
      throw new Error("Invalid date!");
    }

  	  if (isNaN(Date.parse(date))) {
        throw new Error("Invalid date!");
      }

    const month = date.getMonth();

    switch (month) {
      case 11:
      case 0:
      case 1:
        return "winter";
      case 2:
      case 3:
      case 4:
        return "spring";
      case 5:
      case 6:
      case 7:
        return "summer";
      case 8:
      case 9:
      case 10:
        return "autumn";
      default:
        throw new Error("Invalid date!");
    }
}

module.exports = {
  getSeason
};
