const flat = (arr = [], depth = Infinity) =>
  arr.reduce(
    (res, item) =>
      res.concat(
        // eslint-disable-next-line no-nested-ternary
        depth > 0 ? (depth > 1 && Array.isArray(item) ? flat(item, depth - 1) : item) : [item],
      ),
    [],
  );

export default flat;
