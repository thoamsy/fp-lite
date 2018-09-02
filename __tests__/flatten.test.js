import flatten from '../src/flatten';

describe('test flatten function', () => {
  it('should flatten the 2d array', () => {
    const arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    expect(flatten(arr)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
  it('should only flatten the depth of two level', () => {
    const arr1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, [23, 45]]];
    expect(flatten(arr1)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 1, [23, 45]]);

    const arr2 = [[[1, 2], [3, 4]], [5, 6]];
    expect(flatten(arr2)).toEqual([[1, 2], [3, 4], 5, 6]);
  });
});
