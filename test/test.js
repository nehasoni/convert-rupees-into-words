'use strict';

var expect = require('chai').expect;
var indianCurrencyToWordsConverter = require('../index');

describe('#indianCurrencyToWordsConverter', function() {
  it('should convert hundreds', function() {
    var result = indianCurrencyToWordsConverter(115);
    expect(result).to.equal('One Hundred Fifteen');
  });

  it('should convert thousands', function() {
    var result = indianCurrencyToWordsConverter(12677);
    expect(result).to.equal('Twelve Thousand Six Hundred Seventy Seven');
  });

  it('should convert 1000 correctly', function() {
    var result = indianCurrencyToWordsConverter(1000);
    expect(result).to.equal('One Thousand');
  });

  it('should convert lakhs', function() {
    var result = indianCurrencyToWordsConverter(567123);
    expect(result).to.equal('Five Lakh Sixty Seven Thousand One Hundred Twenty Three');
  });
  
  it('should convert 100000 correctly', function() {
    var result = indianCurrencyToWordsConverter(100000);
    expect(result).to.equal('One Lakh');
  });

  it('should convert crores', function() {
    var result = indianCurrencyToWordsConverter(160567123);
    expect(result).to.equal('Sixteen Crore Five Lakh Sixty Seven Thousand One Hundred Twenty Three');
  });

  it('should convert 10000000 correctly', function() {
    var result = indianCurrencyToWordsConverter(10000000);
    expect(result).to.equal('One Crore');
  });

  it('should convert 10000000 correctly', function() {
    var result = indianCurrencyToWordsConverter(10000000);
    expect(result).to.equal('One Crore');
  });

  it('should convert 10000000000 correctly', function() {
    var result = indianCurrencyToWordsConverter(1000000000);
    expect(result).to.equal('');
  });
});
