import flat from '../src/flat';

describe('Test flat function', () => {
  let arr = [];
  beforeEach(() => {
    arr = [[0, 1], 2, 3, [4, [5, 6, 7], [8, [9, [10, [11, 12], 13]]]]];
  });
  it('应该什么都不做', () => {
    expect(flat(arr, 0)).toEqual(arr);
  });
  it('应该能够 flat 1 层数组', () => {
    expect(flat(arr, 1)).toEqual([0, 1, 2, 3, 4, [5, 6, 7], [8, [9, [10, [11, 12], 13]]]]);
  });
  it('应该能够 flat 2 层数组', () => {
    expect(flat(arr, 2)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, [9, [10, [11, 12], 13]]]);
  });
  it('应该能够 flat 3 层数组', () => {
    expect(flat(arr, 3)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, [10, [11, 12], 13]]);
  });
  it('应该最多只能够 flat 4 层数组', () => {
    expect(flat(arr, 4)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, [11, 12], 13]);
  });
  it('应该最多只能够 flat 5 层数组', () => {
    expect(flat(arr, 5)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);
    expect(flat(arr)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);
  });
});
