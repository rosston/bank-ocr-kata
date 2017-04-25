'use strict'

const nums = [
  {
    string: [
      ' _ ',
      '| |',
      '|_|'
    ].join(''),
    value: 0
  },
  {
    string: [
      '   ',
      '  |',
      '  |'
    ].join(''),
    value: 1
  },
  {
    string: [
      ' _ ',
      ' _|',
      '|_ '
    ].join(''),
    value: 2
  },
  {
    string: [
      ' _ ',
      ' _|',
      ' _|'
    ].join(''),
    value: 3
  },
  {
    string: [
      '   ',
      '|_|',
      '  |'
    ].join(''),
    value: 4
  },
  {
    string: [
      ' _ ',
      '|_ ',
      ' _|'
    ].join(''),
    value: 5
  },
  {
    string: [
      ' _ ',
      '|_ ',
      '|_|'
    ].join(''),
    value: 6
  },
  {
    string: [
      ' _ ',
      '  |',
      '  |'
    ].join(''),
    value: 7
  },
  {
    string: [
      ' _ ',
      '|_|',
      '|_|'
    ].join(''),
    value: 8
  },
  {
    string: [
      ' _ ',
      '|_|',
      ' _|'
    ].join(''),
    value: 9
  }
]

/**
 * Parses a "line" of OCR-generated numbers.
 *
 * For example, given this input:
 *      _  _     _  _  _  _  _
 *    | _| _||_||_ |_   ||_||_|
 *    ||_  _|  | _||_|  ||_| _|
 *
 * this function will return:
 *  '123456789'
 *
 * @param {String} numberLine - The "line" of numbers to parse
 *
 * @return {String} - The parsed number as a string (since there may be leading
 *    zeros)
 */
module.exports = function parseNumberLine (numberLine) {
  const splitLines = numberLine
    .split('\n')
    .filter((x) => x && x.replace('\n', ''))

  let parsedNumberLine = ''
  for (let i = 0; i < splitLines[0].length; i += 3) {
    const joinedString = splitLines
      .map((line) => line.slice(i, i + 3))
      .join('')
    const parsedNumber = nums
      .find((num) => (num.string === joinedString))
      .value
    parsedNumberLine += parsedNumber
  }
  return parsedNumberLine
}
