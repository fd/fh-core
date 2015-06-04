'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _Global = require('./Global');

var _es6Promise = require('es6-promise');

var Promise;

exports.Promise = Promise;
if (_Global.Global.Promise) {
  exports.Promise = Promise = _Global.Global.Promise;
} else {
  exports.Promise = Promise = _es6Promise.Promise;
}
//# sourceMappingURL=Promise.js.map