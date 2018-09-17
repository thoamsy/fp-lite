import curry from './curry';

const zip = (list1 = [], list2 = []) => {
  let length = 0;
  try {
    length = Math.min(list1.length, list2.length);
  } catch (err) {
    throw TypeError('You should sure the argument are both list');
  }
  if (Number.isNaN(length)) {
    throw TypeError('You should sure the argument are both list');
  }
  const res = [];
  for (let i = 0; i < length; i += 1) {
    res.push([list1[i], list2[i]]);
  }
  return res;
};

export default curry(zip);
