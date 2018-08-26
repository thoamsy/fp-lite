const partial = (fn, ...preset) => (...rest) => fn(...preset, ...rest);

export default partial;
