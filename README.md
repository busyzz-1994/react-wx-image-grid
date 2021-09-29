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
