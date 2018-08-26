import curry from './curry';
import reduce from './reduce';

function prop(path, object) {
  if (Array.isArray(path)) {
    return reduce((val, key) => val[key] || {}, object, path);
  }
  return value[key];
}

export default curry(prop);
