import {
  map, reduce, add, filter, pipe,
} from '../src';

describe('should pipe can run', () => {
  it('should be ok when no params', () => {
    const fn = pipe();
    expect(fn(1)).toBe(1);
    expect(fn([])).toEqual([]);
  });
  it('should be ok when just one param', () => {
    const inc = x => +x + 1;
    const fn = pipe(inc);
    expect(fn(1)).toBe(2);
    expect(fn([])).toBe(1);
    expect(fn({})).toBeNaN();
    expect(fn('')).toBe(1);
    expect(fn(NaN)).toBeNaN();
  });
  it('should be ok when has two params', () => {
    const square = x => x ** 2;
    const getTheSum = pipe(
      map(square),
      reduce(add, 0),
    );
    const arr1 = [1, 2, 3, 4];
    const value = getTheSum(arr1);
    expect(value).toBe(1 + 4 + 9 + 16);
  });

  it('should be ok when more then two params', () => {
    const square = x => x ** 2;
    const getTheSum = pipe(
      map(square),
      filter(x => x & 1),
      reduce(add, 0),
    );
    const arr1 = [1, 2, 3, 4];
    const value = getTheSum(arr1);
    expect(value).toBe(1 + 9);
  });
});
