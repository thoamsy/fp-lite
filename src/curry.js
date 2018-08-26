export default function curry(fn, length = fn.length) {
  return function curried(...args) {
    return args.length >= length
      ? fn.apply(this, args)
      : curried.bind(fn, ...args);
  };
}
