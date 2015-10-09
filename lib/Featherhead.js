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
			var repo = Utils.encodeURIComponent(this.repo);
			var assets = Utils.encodeURIComponent(this.assets);

			var url = path;
			url = Utils.normalizePath(url);
			url = Utils.encodeURI(url);
			url = '/_asset/' + repo + '/' + assets + url;
			if (this['cdn-domain']) {
				url = '//' + this['cdn-domain'] + url;
			}

			return url;
		}
	}, {
		key: 'dataURL',
		value: function dataURL(path) {
			var repo = Utils.encodeURIComponent(this.repo);
			var commit = Utils.encodeURIComponent(this.commit);

			var url = path;
			url = Utils.normalizePath(url);
			url = Utils.encodeURI(url);
			url = url.replace(RE_EXT_JSON, '');
			url = '/_data/fetch/' + repo + '/' + commit + url;
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
//# sourceMappingURL=Featherhead.js.map