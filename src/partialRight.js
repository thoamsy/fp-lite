const partialRight = (fn, ...rightArgs) => (...leftArgs) => fn(...leftArgs, ...rightArgs);

export default partialRight;
