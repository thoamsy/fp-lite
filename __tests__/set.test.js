import { set } from '../src';

describe('test', () => {
  let obj;
  beforeEach(() => {
    obj = {
      a: {
        b: {
          c: {
            d: 1,
          },
        },
      },
    };
  });
  test('should looks good with string path', () => {
    set('a.b.c.d', 2, obj);
    expect(obj).toEqual({ a: { b: { c: { d: 2 } } } });
    set('a.b.c.e', 4, obj);
    expect(obj).toEqual({ a: { b: { c: { d: 2, e: 4 } } } });
    set('a.foo', [1, 2, 3], obj);
    expect(obj).toEqual({ a: { b: { c: { d: 2, e: 4 } }, foo: [1, 2, 3] } });
    set('b.c', 6, obj);
    expect(obj).toEqual({ a: { b: { c: { d: 2, e: 4 } }, foo: [1, 2, 3] }, b: { c: 6 } });
  });
  test('should looks good with array path', () => {
    set(['a', 'b', 'c', 'd'], 2, obj);
    expect(obj).toEqual({ a: { b: { c: { d: 2 } } } });
    set(['a', 'b', 'c', 'e'], 4, obj);
    expect(obj).toEqual({ a: { b: { c: { d: 2, e: 4 } } } });
    set(['a', 'foo'], [1, 2, 3], obj);
    expect(obj).toEqual({ a: { b: { c: { d: 2, e: 4 } }, foo: [1, 2, 3] } });
    set(['b', 'c'], 6, obj);
    expect(obj).toEqual({ a: { b: { c: { d: 2, e: 4 } }, foo: [1, 2, 3] }, b: { c: 6 } });
  });
});
