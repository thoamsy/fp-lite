import curry from './curry';

const complement = (predicate, ...args) => !predicate(...args);

export default curry(complement);
