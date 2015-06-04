export var Global = undefined;
let wnd = null;
try { wnd = window } catch(e) {};
Global = (wnd ? wnd : global);
