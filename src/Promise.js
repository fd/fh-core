import {Global} from './Global';
import {Promise as Polyfill} from 'es6-promise';

export var Promise;

if (Global.Promise) {
  Promise = Global.Promise;
} else {
  Promise = Polyfill;
}
