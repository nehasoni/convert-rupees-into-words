'use strict';

var expect = require('chai').expect;
var index = require('../index');

describe('#indianCurrencyToWordsConverter', function() {
  it('should convert hundreds', function() {
    var result = index.indianCurrencyToWordsConverter(115);
    expect(result).to.equal('One Hundred Fifteen');
  });

  it('should convert thousands', function() {
    var result = index.indianCurrencyToWordsConverter(12677);
    expect(result).to.equal('Twelve Thousand Six Hundred Seventy Seven');
  });

  it('should convert Lakhs', function() {
    var result = index.indianCurrencyToWordsConverter(567123);
    expect(result).to.equal('Five Lakh Sixty Seven Thousand One Hundred Twenty Three');
  });
});