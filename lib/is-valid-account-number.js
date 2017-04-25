'use strict'

/**
 * Determines if a provided account number is valid.
 *
 * @param {String} accountNumber - An account number string to validate
 *
 * @return {Boolean}
 */
module.exports = function isValidAccountNumber (accountNumber) {
  const sum = accountNumber
    .split('')
    .reverse()
    .reduce((acc, digit, index) => {
      return acc + (Number(digit) * (index + 1))
    }, 0)
  return (sum % 11) === 0
}
