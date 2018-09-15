import reduce from './reduce';

const set = (path, value, object) => {
  if (Array.isArray(path)) {
    const final = reduce((val, key) => val[key], object, path.slice(0, -1));
    console.log(final, path.slice(0, -1));
    final[path.slice(-1)[0]] = value;
  }
  if (typeof path === 'string') {
    return set(path.split(/\.|\[|\]/g).filter(Boolean), value, object);
  }
  return object;
};

export default set;
