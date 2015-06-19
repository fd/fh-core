'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _Featherhead = require('./Featherhead');

var _Utils = require('./Utils');

var main = null;
if (_Utils.self.Featherhead) {
  main = new _Featherhead.Featherhead(_Utils.self.Featherhead);
  _Utils.self.Featherhead = main;
}

var Featherhead = _Featherhead.Featherhead;
exports.Featherhead = Featherhead;
exports['default'] = main;
//# sourceMappingURL=index.js.map