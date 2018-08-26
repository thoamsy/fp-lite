import partial from './partial';

export default function curry(fn, arity = fn.length) {
  return function curried(...args) {
    return args.length >= arity ? fn(...args) : partial(curried, ...args);
  };
}
