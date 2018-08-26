import reduce from './reduce';
import curry from './curry';

/* eslint-disable */
// map juse recurison
function _map(fn, arr, res) {
  return arr.length ? map(fn, arr.slice(1), res.concat(fn(arr[0]))) : res;
}
/* eslint-enable */

const map = (fn, arr) => reduce((res, cur) => res.concat(fn(cur)), [], arr);

export default curry(map);
