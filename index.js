'use strict';

var languages = require('languages-list');
var pickSome  = require('pick-some');

module.exports = function () {

  var ret = pickSome(languages, { count: 1 });

  return ret && ret[0];
};
