import curry from '../src/curry';

describe('Test curry function', () => {
  it('应该对满足 sum 函数', () => {
    const sum = (x, y, z) => x + y + z;
    const sumCurried = curry(sum);

    const value = sum(1, 2, 3);
    expect(sumCurried(1, 2, 3)).toBe(value);
    expect(sumCurried(1)(2)(3)).toBe(value);
    expect(sumCurried(1, 2)(3)).toBe(value);
    expect(sumCurried(1)(2, 3)).toBe(value);
  });
});
