'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _Featherhead = require('./Featherhead');

var _Global = require('./Global');

var main = null;
if (_Global.Global.Featherhead) {
  main = new _Featherhead.Featherhead(_Global.Global.Featherhead);
  _Global.Global.Featherhead = main;
}

var Featherhead = _Featherhead.Featherhead;
exports.Featherhead = Featherhead;
exports['default'] = main;
//# sourceMappingURL=index.js.map