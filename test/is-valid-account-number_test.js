/* eslint-disable no-unused-expressions */
/* eslint-env mocha */

'use strict'

const {expect} = require('chai')
const isValidAccountNumber = require('../lib/is-valid-account-number')

describe('isValidAccountNumber()', function () {
  it('should return false when an account number is invalid', function () {
    expect(isValidAccountNumber('123456780')).to.be.false
    expect(isValidAccountNumber('110000009')).to.be.false
  })

  it('should return true when an account number is valid', function () {
    expect(isValidAccountNumber('123456789')).to.be.true
    expect(isValidAccountNumber('100001009')).to.be.true
  })
})
