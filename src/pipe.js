const pipe = (...fns) => {
  if (!fns.length) {
    return x => x;
  }
  if (fns.length === 1) {
    return fns[0];
  }

  return fns.reduceRight((a, b) => (...args) => a(b(...args)));
};

export default pipe;
