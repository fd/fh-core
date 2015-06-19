import * as Utils from './Utils';

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

    if (!this.assets || (typeof this.assets !== 'string') || this.assets.length != 40) {
      throw Error("Featherhead: invalid assets option passed to constructor.")
    }
  }

  asset(path) {
    let assets = Utils.encodeURIComponent(this.assets);
    path = Utils.normalizePath(path);
    path = Utils.encodeURI(path);
    return '/_asset/' + assets + path;
  }

}
