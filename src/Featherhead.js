import {Promise} from './Promise';
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
  }

  resolve(unit) {
    if (typeof unit === 'string') {
      unit = { path: unit };
    }

    unit.path = Utils.normalizePath(unit.path);
    var info = Utils.splitPath(unit.path);

    var unit = {
      path:    unit.path,
      dir:     info.dir,
      base:    info.base,
      address: Utils.naddress(this, unit.path)
    };

    return Promise.resolve(unit);
  }

}
