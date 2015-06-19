"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.splitPath = splitPath;
exports.normalizePath = normalizePath;
var self = typeof window !== "undefined" ? window : global;

var encodeURIComponent = self.encodeURIComponent;
var encodeURI = self.encodeURI;
exports.self = self;
exports.encodeURIComponent = encodeURIComponent;
exports.encodeURI = encodeURI;

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
//# sourceMappingURL=Utils.js.map