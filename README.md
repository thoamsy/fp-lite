# Functional Fp

一个自己实现的 FP，将常用的 FP 函数抽象出来。不像 Lodash/fp 那么不规范，也不像 ramda 那样过于复杂。
因为 ES6 能在 **严格模式下支持尾递归**，所以函数应该尽量采用递归来实现。另外，因为本仓库不是出于应用的目的，所以不会对性能有太多的计较

## curry

`curry: (a,b,c,...) -> d -> a -> b -> c -> ... -> d`
e.g.

```js
const add = (a, b) => a + b;

const addCurried = curry(add);
const add10 = addCurried(10);

add10(20); // 30
```
