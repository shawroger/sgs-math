# Diycode

Diycode 是一个非常简单的字符串编码工具，它可以将任意的字符串转化成有特定字符编码的字符串，并且能做到一一对应的编码译码。

# 使用

##

使用 npm 安装

```bash
npm install diycode --save
```

在浏览器中使用

```html
<script src="https://unpkg.com/diycode/dist/index.js"></script>
```

# API

Diycode 提供了四个简单的函数工具

## encode

```ts
export declare const encode: (
	input: string,
	format: string | string[]
) => string;
```

可以将指定的字符串转化成由特定编码字符(数组)构成的字符串。

## decode

```ts
export declare const decode: (
	input: string,
	format: string | string[]
) => string;
```

可以将编码后的字符串依据特定编码字符(数组)转化成未编码的字符

另外两个工具函数提供了`将任意进制数转化成十进制`和`将十进制数转化成任意进制`的函数。

## N_10

```ts
export declare const N_10: (val: number | bigint, from: number) => number;
```

将任意进制数转化成十进制

## n10_N

```ts
export declare const n10_N: (
	val: number | bigint,
	to: number | bigint
) => number[];
```

将十进制数转化成任意进制数
