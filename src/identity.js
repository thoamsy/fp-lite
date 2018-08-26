/**
 * identify 这个函数可能看上去没什么用，因为它看上去什么都没做啊！ f(h) === h
 * 很难想象这是一个有用的函数
 *
 * 不过考虑下面这个例子
 * const nums = [-1,0,1,2,3]
 * const excludeZero = nums.filter(identify); // [-1,1,2,3]
 * 在这种使用场景下，就能快速的过滤非 0 的元素。
 *
 * 同样的，
 *
 * @export
 * @param {*} f
 * @returns
 */
export default function identity(f) {
  return f;
}
