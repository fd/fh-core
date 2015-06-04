"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Global = undefined;
exports.Global = Global;
var wnd = null;
try {
  wnd = window;
} catch (e) {};
exports.Global = Global = wnd ? wnd : global;
//# sourceMappingURL=Global.js.map