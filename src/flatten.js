const flatten = (array = [], result = []) =>
  array.length ? flatten(array.slice(1), result.concat(array[0])) : result;

export default flatten;
