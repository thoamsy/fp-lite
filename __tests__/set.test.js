import { set } from '../src';

describe('test', () => {
  test('should looks good', () => {
    const obj = {
      a: {
        b: {
          c: {
            d: 1,
          },
        },
      },
    };
    set('a.b.c.d', 2, obj);
    expect(obj).toEqual({ a: { b: { c: { d: 2 } } } });
    set('a.b.c.e', 4, obj);
    expect(obj).toEqual({ a: { b: { c: { d: 2, e: 4 } } } });
    set('a.foo', [1, 2, 3], obj);
    expect(obj).toEqual({ a: { b: { c: { d: 2, e: 4 } } }, foo: [1, 2, 3] });
  });
});
