(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Featherhead = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _Utils = require('./Utils');

var Utils = _interopRequireWildcard(_Utils);

var RE_EXT_JSON = /\.json$/;

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

		if (!this.assets || typeof this.assets !== 'string' || this.assets.length != 40) {
			throw Error('Featherhead: invalid assets option passed to constructor.');
		}
	}

	_createClass(Featherhead, [{
		key: 'assetURL',
		value: function assetURL(path) {
			var assets = Utils.encodeURIComponent(this.assets);

			var url = path;
			url = Utils.normalizePath(url);
			url = Utils.encodeURI(url);
			url = '/_asset/' + assets + url;
			if (this['cdn-domain']) {
				url = '//' + this['cdn-domain'] + url;
			}

			return url;
		}
	}, {
		key: 'dataURL',
		value: function dataURL(path) {
			var commit = Utils.encodeURIComponent(this.commit);

			var url = path;
			url = Utils.normalizePath(url);
			url = Utils.encodeURI(url);
			url = url.replace(RE_EXT_JSON, '');
			url = '/_data/fetch/' + commit + url;
			if (this['cdn-domain']) {
				url = '//' + this['cdn-domain'] + url;
			}

			return url;
		}
	}, {
		key: 'commitURL',
		value: function commitURL() {
			return '/_data/commit';
		}
	}]);

	return Featherhead;
})();

exports.Featherhead = Featherhead;

},{"./Utils":2}],2:[function(require,module,exports){
(function (global){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.splitPath = splitPath;
exports.normalizePath = normalizePath;
var self = typeof window !== "undefined" ? window : global;

var encodeURIComponent = self.encodeURIComponent;
var encodeURI = self.encodeURI;
exports.self = self;
exports.encodeURIComponent = encodeURIComponent;
exports.encodeURI = encodeURI;

function splitPath(path) {
  if (path === "/") {
    return { base: "/" };
  }

  var idx = path.lastIndexOf("/");
  if (idx === 0) {
    return { dir: "/", base: path.slice(1) };
  }

  return { dir: path.slice(0, idx), base: path.slice(idx + 1) };
}

function normalizePath(path) {
  path = path.replace(/(^\/+)|(\/+$)/g, "");

  if (path.indexOf("/") !== 0) {
    path = "/" + path;
  }

  return path;
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],3:[function(require,module,exports){
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

},{"./Featherhead":1,"./Utils":2}]},{},[3])(3)
});
//# sourceMappingURL=featherhead.js.map
