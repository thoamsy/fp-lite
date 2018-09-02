import unfold from '../src/unfold';

describe('test my unfold function', () => {
  it('should can generate the array', () => {
    const f = n => (n > 50 ? false : [-n, n + 10]);
    const getNegativesFrom = unfold(f);
    expect(getNegativesFrom(10)).toEqual([-10, -20, -30, -40, -50]);
    expect(getNegativesFrom(20)).toEqual([-20, -30, -40, -50]);
  });

  it('should can unfold the 2d array', () => {
    const f = n => (n.length >= 5 ? false : [n, n.concat(1)]);
    expect(unfold(f, [])).toEqual([[], [1], [1, 1], [1, 1, 1], [1, 1, 1, 1]]);
  });
});
