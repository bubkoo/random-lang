'use strict';

var expect    = require('chai').expect;
var languages = require('languages-list');


describe('random-lang: ', function () {

  var randomLang = require('../../index');

  it('randomLang()', function () {
    expect(randomLang()).to.be.oneOf(languages)
  });
});
