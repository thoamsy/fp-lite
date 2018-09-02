import curry from './curry';
import reduce from './reduce';

function prop(path, object) {
  if (Array.isArray(path)) {
    return reduce((val, key) => val[key] || {}, object, path);
  }
  if (typeof path === 'string') {
    return prop(path.split(/\.|\[|\]/g).filter(Boolean), object);
  }
  return object[path];
}

export default curry(prop);
