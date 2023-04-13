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

  if (date === undefined) {
    return 'Unable to determine the time of year!'
  }
  //Date.parse for parsing date strings, which gives an authoritative way to check if the date string is valid.
  //date instanceof Date && !isNaN(date) It also checks that it is an instance of a date, and that it is a valid date
  if ( (!Date.parse(date)) ) {
    throw Error('Invalid date!');
  };

  if (!(date instanceof Date) ) {
    throw Error('Invalid date!');
  };

  if ( Object.getOwnPropertyNames(date).length) {
    throw Error('Invalid date!');
  };
  ////The Object.getOwnPropertyNames(obj) static method returns an array of all properties (including non-enumerable properties except for those which use Symbol) found directly in a given object.
  //Date.parse() Разбирает строковое представление даты и возвращает количество миллисекунд с 1 января 1970 года 00:00:00 по местному времени.
  //Метод getMonth() возвращает месяц указанной даты по местному времени, нумерация месяцев начинается с нуля для первого месяца в году.
  const month = date.getMonth();

  switch (month) {
      case 11 :
      case 0:
      case 1:

      return 'winter';

      case 2 :
      case 3:
      case 4:
          
      return 'spring';

      case 5 :
      case 6:
      case 7:
          
      return 'summer';

      case 8 :
      case 9:
      case 10:
          
      return 'autumn';
      
  }

}

module.exports = {
  getSeason
};
