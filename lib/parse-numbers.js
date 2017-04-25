'use strict'

const parseNumberLine = require('./parse-number-line')

/**
 * Parses a string (representing an entire file) of OCR-generated numbers.
 *
 * For example, given this input:
 *      _  _     _  _  _  _  _
 *    | _| _||_||_ |_   ||_||_|
 *    ||_  _|  | _||_|  ||_| _|
 *
 *   _  _  _  _  _  _  _  _  _
 *  |_ |_ |_ |_ |_ |_ |_ |_ |_
 *  |_||_||_||_||_||_||_||_||_|
 *
 * this function will return:
 *  [
 *    '123456789',
 *    '666666666'
 *  ]
 *
 * @param {String} fileContents - The contents of the OCR-generated numbers
 *    file
 *
 * @return {Array<String>} - The parsed numbers as an array of strings (strings
 *    rather than numbers since there may be leading zeros)
 */
module.exports = function parseNumbers (fileContents) {
  return fileContents
    .split('\n\n')
    .filter((x) => x)
    .map(parseNumberLine)
}
