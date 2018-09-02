import reduce from './reduce';
import curry from './curry';

const filter = (predicate, list) =>
  reduce((res, cur) => (predicate(cur) ? res.concat(cur) : res), [], list);

export default curry(filter);
