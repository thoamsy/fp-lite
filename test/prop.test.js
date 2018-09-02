import prop from '../src/prop';

describe('The prop function should powerful like the lodash', () => {
  it('should can get the value with array of path', () => {
    const path = ['my', 'name', 'is'];
    const obj = {
      my: {
        name: {
          is: 'I',
          not: 'me',
        },
      },
      you: {
        name: {
          is: 'you',
          not: 'him',
        },
        skr: [1, 2, 3],
      },
    };

    expect(prop(path, obj)).toBe('I');
    expect(prop(['you', 'name', 'not'], obj)).not.toBe('you');
    expect(prop(['you', 'name', 'is'], obj)).toBe('you');
    expect(prop('you.name.is', obj)).toBe('you');
    expect(prop('you.skr[0]', obj)).toBe(1);
    expect(prop('you.skr[1]', obj)).toBe(2);
    expect(prop('you.skr.1', obj)).toBe(2);
  });
});
