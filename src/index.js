import {Featherhead as fh} from './Featherhead';
import {Global} from './Global';

var main = null;
if (Global.Featherhead) {
  main = new fh(Global.Featherhead);
  Global.Featherhead = main;
}

export var Featherhead = fh;
export default main;
