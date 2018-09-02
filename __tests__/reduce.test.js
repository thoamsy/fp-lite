import reduce from '../src/reduce';

describe('Test my reduce function', () => {
  let arr1;
  let arr2;
  const add = (x, y) => x + y;
  const times = (x, y) => x * y;
  beforeEach(() => {
    arr1 = [1, 2, 3, 4, 5];
    arr2 = [-1, -2, -3, -4, -5];
  });

  const sum = reduce(add, 0);
  const product = reduce(times, 1);
  it('should can accumluate the array', () => {
    expect(sum(arr1)).toBe(15);
    expect(sum(arr2)).toBe(-15);
  });

  it('should can product the array', () => {
    expect(product(arr1)).toBe(120);
    expect(product(arr2)).toBe(-120);
  });
});
