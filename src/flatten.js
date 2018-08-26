export default function flatten(arry = []) {
  return arry.reduce((result, step) => result.concat(step), []);
}
