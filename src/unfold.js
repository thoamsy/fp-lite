const unfold = (fn, seed, result = []) => {
  const value = fn(seed);
  if (value === false) {
    return result;
  }
  const [nextIter, nextSeed] = value;
  // NOTE: 因为 [].concat([1]) 返回 [1], 得不到我们希望的 [[1]], 所以需要多一层 []
  return unfold(fn, nextSeed, result.concat([nextIter]));
};

export default unfold;
