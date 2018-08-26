import map from '../src/map';
import prop from '../src/prop';

describe('the function should be same like the Array.prototype.map', () => {
  it('should times two for every element in array', () => {
    const timesTwo = map(a => a * 2);
    const arr1 = [1, 2, 3];
    expect(timesTwo(arr1)).toEqual([2, 4, 6]);
    const arr2 = [5, 6, 7, 8];
    expect(timesTwo(arr2)).toEqual([10, 12, 14, 16]);
  });

  it('should pluck the property for objects', () => {
    const pluckWithName = map(prop('name'));
    const objects = [
      { name: 'a', age: 18 },
      { name: 'b', age: 20 },
      { name: 'c', age: 39 },
    ];
    const result = pluckWithName(objects);
    expect(result).toHaveLength(3);
    expect(result).toContain('b');
  });
});
