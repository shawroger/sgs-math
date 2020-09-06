# 三国杀数学计算库

三国杀数学计算目前包含了张昌蒲和糜竺的技能计算。

库 API 很简单，在浏览器里即可计算。

# 计算库

## 张昌蒲 · 严教

```ts
import { ZCP } from "sgs-math";
const cards = [1, 3, 4, 6];
const result = ZCP.calc(cards);
// result为计算结果
```

```ts
//浏览器端引入
const cards = [1, 3, 4, 6];
const result = sgsMath.ZCP.calc(cards);
// result为计算结果
```

## 糜竺 · 资援

```ts
import { Mizhu } from "sgs-math";
const cards = [1, 3, 4, 6, 7, 8];
const result = Mizhu.calc(cards);
// result为计算结果
```

```ts
//浏览器端引入
const cards = [1, 3, 4, 6, 7, 8];
const result = sgsMath.Mizhu.calc(cards);
// result为计算结果
```

# 小工具

计算库中还包含 `utils` 包，可以用来进行其他计算，详情在 `types` 中有注释。
