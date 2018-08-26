import map from '../src/map';

describe('the function should be same like the Array.prototype.map', () => {
  it('should times two for every element in array', () => {
    const arr = [1, 2, 3];
    expect(map(a => a * 2, arr)).toEqual([2, 4, 6]);
  });

  it('should pluck the property for objects', () => {
    const objects = [
      { name: 'a', age: 18 },
      { name: 'b', age: 20 },
      { name: 'c', age: 39 },
    ];
    const value = map(({ name }) => name, objects);
    expect(value).toHaveLength(3);
    expect(value).toContain('b');
  });
});
