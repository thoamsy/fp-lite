'use strict';

export default function flatten(array = [], result = []) {
  return array.length
    ? flatten(array.slice(1), result.concat(array[0]))
    : result;
  // return array.reduce((result, step) => result.concat(step), []);
}
