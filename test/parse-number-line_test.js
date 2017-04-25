/* eslint-disable no-unused-expressions */
/* eslint-env mocha */

'use strict'

const {expect} = require('chai')
const parseNumberLine = require('../lib/parse-number-line')

describe('parseNumberLine()', function () {
  it('should parse 0s', function () {
    const numberLine = '\n' +
    ' _  _  _  _  _  _  _  _  _ \n' +
    '| || || || || || || || || |\n' +
    '|_||_||_||_||_||_||_||_||_|\n'

    const expected = '000000000'
    const actual = parseNumberLine(numberLine)
    expect(actual).to.deep.equal(expected)
  })

  it('should parse 1s', function () {
    const numberLine = '\n' +
    '                           \n' +
    '  |  |  |  |  |  |  |  |  |\n' +
    '  |  |  |  |  |  |  |  |  |\n'

    const expected = '111111111'
    const actual = parseNumberLine(numberLine)
    expect(actual).to.deep.equal(expected)
  })

  it('should parse 2s', function () {
    const numberLine = '\n' +
    ' _  _  _  _  _  _  _  _  _ \n' +
    ' _| _| _| _| _| _| _| _| _|\n' +
    '|_ |_ |_ |_ |_ |_ |_ |_ |_ \n'

    const expected = '222222222'
    const actual = parseNumberLine(numberLine)
    expect(actual).to.deep.equal(expected)
  })

  it('should parse 3s', function () {
    const numberLine = '\n' +
    ' _  _  _  _  _  _  _  _  _ \n' +
    ' _| _| _| _| _| _| _| _| _|\n' +
    ' _| _| _| _| _| _| _| _| _|\n'

    const expected = '333333333'
    const actual = parseNumberLine(numberLine)
    expect(actual).to.deep.equal(expected)
  })

  it('should parse 4s', function () {
    const numberLine = '\n' +
    '                           \n' +
    '|_||_||_||_||_||_||_||_||_|\n' +
    '  |  |  |  |  |  |  |  |  |\n'

    const expected = '444444444'
    const actual = parseNumberLine(numberLine)
    expect(actual).to.deep.equal(expected)
  })

  it('should parse 5s', function () {
    const numberLine = '\n' +
    ' _  _  _  _  _  _  _  _  _ \n' +
    '|_ |_ |_ |_ |_ |_ |_ |_ |_ \n' +
    ' _| _| _| _| _| _| _| _| _|\n'

    const expected = '555555555'
    const actual = parseNumberLine(numberLine)
    expect(actual).to.deep.equal(expected)
  })

  it('should parse 6s', function () {
    const numberLine = '\n' +
    ' _  _  _  _  _  _  _  _  _ \n' +
    '|_ |_ |_ |_ |_ |_ |_ |_ |_ \n' +
    '|_||_||_||_||_||_||_||_||_|\n'

    const expected = '666666666'
    const actual = parseNumberLine(numberLine)
    expect(actual).to.deep.equal(expected)
  })

  it('should parse 7s', function () {
    const numberLine = '\n' +
    ' _  _  _  _  _  _  _  _  _ \n' +
    '  |  |  |  |  |  |  |  |  |\n' +
    '  |  |  |  |  |  |  |  |  |\n'

    const expected = '777777777'
    const actual = parseNumberLine(numberLine)
    expect(actual).to.deep.equal(expected)
  })

  it('should parse 8s', function () {
    const numberLine = '\n' +
    ' _  _  _  _  _  _  _  _  _ \n' +
    '|_||_||_||_||_||_||_||_||_|\n' +
    '|_||_||_||_||_||_||_||_||_|\n'

    const expected = '888888888'
    const actual = parseNumberLine(numberLine)
    expect(actual).to.deep.equal(expected)
  })

  it('should parse 9s', function () {
    const numberLine = '\n' +
    ' _  _  _  _  _  _  _  _  _ \n' +
    '|_||_||_||_||_||_||_||_||_|\n' +
    ' _| _| _| _| _| _| _| _| _|\n'

    const expected = '999999999'
    const actual = parseNumberLine(numberLine)
    expect(actual).to.deep.equal(expected)
  })

  it('should parse 123456789', function () {
    const numberLine = '\n' +
    '    _  _     _  _  _  _  _ \n' +
    '  | _| _||_||_ |_   ||_||_|\n' +
    '  ||_  _|  | _||_|  ||_| _|\n'

    const expected = '123456789'
    const actual = parseNumberLine(numberLine)
    expect(actual).to.deep.equal(expected)
  })
})
