import {Global} from './Global';

export function splitPath(path) {
  if (path === "/") {
    return { base: "/" };
  }

  let idx = path.lastIndexOf('/');
  if (idx === 0) {
    return { dir: "/", base: path.slice(1) };
  }

  return { dir: path.slice(0,idx), base: path.slice(idx+1) };
}

export function normalizePath(path) {
  path = path.replace(/(^\/+)|(\/+$)/g, '');

  if (path.indexOf('/') !== 0) {
    path = "/" + path;
  }

  return path;
}

export function naddress(info, path) {
  let commit = Global.encodeURIComponent(info.commit);
  path = Global.encodeURI(path);
  return '/_asset/' + commit + path;
}
