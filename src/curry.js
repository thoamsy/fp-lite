import partial from './partial';

export default function curry(fn, length = fn.length) {
  return function curried(...args) {
    return args.length >= length ? fn(...args) : partial(curried, ...args);
  };
}
