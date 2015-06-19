import {Featherhead as fh} from './Featherhead';
import {self} from './Utils';

var main = null;
if (self.Featherhead) {
  main = new fh(self.Featherhead);
  self.Featherhead = main;
}

export var Featherhead = fh;
export default main;
