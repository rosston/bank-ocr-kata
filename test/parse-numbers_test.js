/* eslint-disable no-unused-expressions */
/* eslint-env mocha */

'use strict'

const {expect} = require('chai')
const fs = require('fs')
const parseNumbers = require('../lib/parse-numbers')
const path = require('path')

const fixturePath = path.resolve(path.join(
  __dirname,
  './fixtures/many-numbers.txt'
))

describe('parseNumbers()', function () {
  it('should parse a file with many numbers', function () {
    const fileContents = fs.readFileSync(fixturePath, 'utf8')

    const expected = [
      '000000000',
      '111111111',
      '222222222',
      '333333333',
      '444444444',
      '555555555',
      '666666666',
      '777777777',
      '888888888',
      '999999999',
      '123456789',
      '000000051'
    ]
    const actual = parseNumbers(fileContents)
    expect(actual).to.deep.equal(expected)
  })
})
