import curry from './curry';

function reduce(fn, initial, arr) {
  return arr.length ? reduce(fn, fn(initial, arr[0]), arr.slice(1)) : initial;
}

export default curry(reduce);
