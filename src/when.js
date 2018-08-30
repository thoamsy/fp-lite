import identity from './identity';
import curry from './curry';

const when = (predicate, fn) => arg => (predicate(arg) ? fn(arg) : identity(arg));

export default curry(when);
