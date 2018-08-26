import curry from './curry';

function prop(key, value) {
  return value[key];
}

export default curry(prop);
