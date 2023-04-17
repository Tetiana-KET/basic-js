const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  //Math.log() - Метод Math.log() возвращает натуральный (по основанию e) логарифм числа
  //логарифм — это степень, в которую нужно возвести a для получения b
  //периодом полураспада реакции и записывается как t 1 /2 
  //t 1 /2 = 0,693/ k .
  //формула расчета времени 
  // time = ln ( N0 / N ) / k.....
  // N0 это начальное значение полураспада, то есть MODERN_ACTIVITY, 
  // N - это то что есть сейчас, то есть sampleActivity......
  // k рассчитывается по формуле 0,693 / период полураспада HALF_LIFE_PERIOD
  //проверить условия, сделать округление и готово)))))
  //Function parameter sampleActivity is a string. Calculated sample age must be number.
  //Age must be integer. Age must be rounded up (ceiling). 
  //In case of wrong input parameter type or inadequate activity value or absence of argument function must return false.
  //const MODERN_ACTIVITY = 15;
  //const HALF_LIFE_PERIOD = 5730;

  /*const N0 = MODERN_ACTIVITY
    const time = ln *( MODERN_ACTIVITY / sampleActivity) / (0.693 / HALF_LIFE_PERIOD)
    ln(x) натуральный логарифм числа, показатель степени в которую нужно возвести число е, чтобы получить х
    натуральный логарифм ln a-  есть решение уравнения e в степени x = a
    ln e = 1 потому что е в степени 1 = е
    ln 1 = 0 потому что е в степени 0 = 1
    ln(x) = Math.log(x)

    Следующая функция возвращает логарифм из y по основанию x (то есть, logхY):
    function getBaseLog(x, y) {
      return Math.log(y) / Math.log(x);
    }
  */

  if (!(typeof sampleActivity == 'string') ||
                     isNaN(sampleActivity) ||//При использовании функции Number.isNaN('NaN'), undefined, 'blabla' - returns false
                        +sampleActivity<=0 || 
          +sampleActivity > MODERN_ACTIVITY) {
    return false;
  }

  const time = Math.log( MODERN_ACTIVITY / +sampleActivity) / (0.693 / HALF_LIFE_PERIOD);
  return Math.ceil(time);

 
}

module.exports = {
  dateSample
};
