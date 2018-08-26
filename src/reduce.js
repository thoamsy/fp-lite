import curry from './curry';

const reduce = (fn, initial, arr) =>
  arr.length ? reduce(fn, fn(initial, arr[0]), arr.slice(1)) : initial;

export default curry(reduce);
