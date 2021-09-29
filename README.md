<!--
 * @Author: busyzz
 * @Date: 2021-09-26 10:20:48
 * @Description:
-->

## 线上展示

[https://busyzz-1994.github.io/react-wx-image-grid/](https://busyzz-1994.github.io/react-wx-image-grid/)

![](https://github.com/busyzz-1994/react-wx-image-grid/blob/master/public/demo.gif)

## 功能

实现类似微信朋友圈的九宫格图片

## install

```sh
yarn add @busyzz/react-wx-image-grid
# or
npm install @busyzz/react-wx-image-grid
```

## 使用

```tsx
import ReactImageGrid from '@busyzz/react-wx-image-grid';

<ReactImageGrid defaultIndex={1}>
  <img src="url" />
  <img src="url" />
  <img src="url" />
  <img src="url" />
  <img src="url" />
  <img src="url" />
  <img src="url" />
</ReactImageGrid>;
```

## 属性

- `defaultIndex`: 默认展示第几张图片
