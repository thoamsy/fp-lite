import { zip } from '../src';

describe('test the zip function', () => {
  it('should can work for two lists which has the same length.', () => {
    const l1 = [1, 2, 3];
    const l2 = 'abc';
    expect(zip(l1, l2)).toEqual([[1, 'a'], [2, 'b'], [3, 'c']]);
  });

  it('should can work for two lists which has the different length.', () => {
    const l1 = [1, 2, 3];
    const l2 = 'abcdefg';
    expect(zip(l1, l2)).toEqual([[1, 'a'], [2, 'b'], [3, 'c']]);

    expect(zip([], [1, 2, 3])).toEqual([]);
  });

  it('should can work for two empty lists', () => {
    expect(zip([], [])).toEqual([]);
  });

  it('should can throw with the illegeal arguments', () => {
    const error = new TypeError('You should sure the argument are both list');
    expect(() => zip(1, 2)).toThrowError(error);
    expect(zip(undefined, [1, 2, 3])).toEqual([]);
    expect(() => zip(null, [1, 2, 3])).toThrowError(error);
  });
});
