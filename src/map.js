import reduce from './reduce';
import curry from './curry';

// map juse recurison
function _map(fn, arr, res = []) {
  return arr.length ? map(fn, arr.slice(1), res.concat(fn(arr[0]))) : res;
}

function map(fn, arr) {
  return reduce((res, cur) => res.concat(fn(cur)), [], arr);
}

export default curry(map);
