# FP-Lite

一个简单的 FP 库，将常用的 FP 函数抽象出来。不会像 ramda 那样复杂，主要是用于一些简单的操作。
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

## TODO
- [ ] 补全一些基本函数. `filter, prop` 这些

- [ ] 补全 `curry` 和 `partial` 相关说明

- [ ] publish 一个 npm 包

- [ ] 更多 list 通用函数

- [ ] Monad 的封装
