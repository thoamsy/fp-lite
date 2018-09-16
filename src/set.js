import curry from './curry';

const set = (path, value, object) => {
  if (typeof path === 'string') {
    return set(path.split(/\.|\[|\]/g).filter(Boolean), value, object);
  }
  const [p, ...rest] = path;
  const res = object;
  if (rest.length) {
    res[p] = res[p] || {};
    return set(rest, value, res[p]);
  }
  res[p] = value;
  return res;
};

export default curry(set);
