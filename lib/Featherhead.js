'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _Promise = require('./Promise');

var _Utils = require('./Utils');

var Utils = _interopRequireWildcard(_Utils);

var Featherhead = (function () {
  function Featherhead() {
    var info = arguments[0] === undefined ? {} : arguments[0];

    _classCallCheck(this, Featherhead);

    var keys = Object.keys(info);
    for (var idx in keys) {
      var key = keys[idx];
      this[key] = info[key];
    }

    if (!this.commit || typeof this.commit !== 'string' || this.commit.length != 40) {
      throw Error('Featherhead: invalid commit option passed to constructor.');
    }
  }

  _createClass(Featherhead, [{
    key: 'resolve',
    value: function resolve(unit) {
      if (typeof unit === 'string') {
        unit = { path: unit };
      }

      unit.path = Utils.normalizePath(unit.path);
      var info = Utils.splitPath(unit.path);

      var unit = {
        path: unit.path,
        dir: info.dir,
        base: info.base,
        address: Utils.naddress(this, unit.path)
      };

      return _Promise.Promise.resolve(unit);
    }
  }]);

  return Featherhead;
})();

exports.Featherhead = Featherhead;
//# sourceMappingURL=Featherhead.js.map