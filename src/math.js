import curry from './curry';

export const add = curry((x, y) => x + y);
export const subtract = curry((x, y) => x - y);
export const multiply = curry((x, y) => x * y);
export const divide = curry((x, y) => x / y);

export const gt = curry((x, y) => x > y);
export const gte = curry((x, y) => x >= y);
export const lt = curry((x, y) => x < y);
export const lte = curry((x, y) => x <= y);
export const equals = curry((x, y) => x === y);

export const pow = curry((x, y) => x ** y);
