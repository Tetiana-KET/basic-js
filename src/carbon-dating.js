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
function dateSample(/* sampleActivity */) {
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

  // if (!(typeof sampleActivity == 'string')) return false;

 
}

module.exports = {
  dateSample
};
