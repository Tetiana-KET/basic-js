const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *  на вход получаем массив, пройтись по массиву перебором и поделить
 *  каждый домен на массив поддоменов
 *  вернуть нужно объект
 *  ключи объекта - каждый кусочек поддомена до точки
 *  значение ключа - количество вхождений
 */
function getDNSStats(domains) {
	const result = {};
	const domainsReversed = domains.map(domain => {
		return domain.split('.').reverse();
	});
	/*
  [
  [ru, yandex, code],
  [ru, yandex, music],
  [ru, yandex]
  ]
  */
	domainsReversed.forEach(domain => {
    let dns = '';

		domain.forEach(subDomain => {
			//[ru, yandex, code],
			dns += `.${subDomain}`;
			//.ru
			//.ru.yandex
			//.ru.yandex.code

			result[dns] = result[dns] ? result[dns] + 1 : 1;
		});
	});
	return result;
}

module.exports = {
  getDNSStats
};
