"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.splitPath = splitPath;
exports.normalizePath = normalizePath;
exports.naddress = naddress;

var _Global = require("./Global");

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

function naddress(info, path) {
  var commit = _Global.Global.encodeURIComponent(info.commit);
  path = _Global.Global.encodeURI(path);
  return "/_asset/" + commit + path;
}
//# sourceMappingURL=Utils.js.map