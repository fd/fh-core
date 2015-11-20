import * as Utils from './Utils';

var RE_EXT_JSON = /\.json$/;

export class Featherhead {

	constructor(info={}) {
		let keys = Object.keys(info);
		for (let idx in keys) {
			let key = keys[idx];
			this[key] = info[key];
		}

		if (!this.commit || (typeof this.commit !== 'string') || this.commit.length != 40) {
			throw Error("Featherhead: invalid commit option passed to constructor.")
		}
	}

	assetURL(path) {
		let repo = Utils.encodeURIComponent(this.repo);
		let commit = Utils.encodeURIComponent(this.commit);

		let url = path;
		url = Utils.normalizePath(url);
		url = Utils.encodeURI(url);
		url = '/asset/' + repo + '/' + commit + url;
		if (this['cdn-domain']) {
			url = '//' + this['cdn-domain'] + url;
		}

		return url;
	}

	dataURL(path) {
		let repo = Utils.encodeURIComponent(this.repo);
		let commit = Utils.encodeURIComponent(this.commit);

		let url = path;
		url = Utils.normalizePath(url);
		url = Utils.encodeURI(url);
		url = url.replace(RE_EXT_JSON, '');
		url = '/data/' + repo + '/' + commit + url;
		if (this['cdn-domain']) {
			url = '//' + this['cdn-domain'] + url;
		}

		return url;
	}

	commitURL() {
		return '/_data/commit';
	}

}
