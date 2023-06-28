# Canvas-Confetti使用文档

canvas-confetti 一个使用 canvas 的五彩纸屑特效 JS 插件

### Demo

[catdad.github.io/canvas-confetti](https://catdad.github.io/canvas-confetti/)



### Install

**1. NPM**

```git
npm install --save canvas-confetti
```

**2. CND**

```html
<script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js">
</script>
```



### options

`confetti` 通过简单一个`options`对象进行配置，配置属性如下：

- `particleCount` 

  **Integer**(default: 50)

  发射纸屑数量

- `angle` 

  **Number**(default: 90)

  发射纸屑角度

- `spread`

  **Number**(default: 45)

  纸屑可以偏离中心多远，以度为单位。45度意味着纸屑将以正负22.5度的指定角度发射。

- `decay`

  **Number**(default: 0.9)

  纸屑消失速度， 取值在（0 ，0.9）之间， 不然会消失很快

- `gravity` 

  **Number** (default: 1)

   纸屑下降的速度， 1为满速下降、0.5半速。 但没有限制，如果你愿意，你甚至可以让粒子上升。

- `drift` 

  **Number** (default: 0)

   纸屑会飘到多远，默认值为0，这意味着它们将直接下降。左边用负数，右边用正数。

- `ticks` 

  **Number** (default: 200)

  纸屑会移动多少次。这是抽象的……但如果五彩纸屑消失得太快，你可以玩一下。

- `origin` 

  **Object** 从哪里开始发射纸屑。如果您愿意，可以在屏幕外启动。

  - `origin.x` **Number** (default: 0.5): 页面上的“x”位置，“0”为左边缘，“1”为右边缘。
  - `origin.y` **Number** (default: 0.5): 页面上的“y”位置，“0”为上边缘，“1”为下边缘。

- `colors` 

  **Array**<String>: 颜色字符串的数组，在十六进制格式…比如“#bada55”。

- `shapes` 

  **Array**<String>: 纸屑的一系列形状。可能的值是'方形'，'圆形'和'星形'。默认是在均匀混合中同时使用正方形和圆形。要使用单个形状，您可以在数组中只提供一个形状，例如' ['star'] '。您还可以通过提供['circle'， 'circle'， 'square'] '等值来更改组合，以使用三分之二的圆圈和三分之一的正方形。

- `scalar` 

  **Number** (default: 1): 每个纸屑颗粒的比例因子。用小数点使五彩纸屑变小。来，试试小小的纸屑，它们太可爱了!

- `zIndex` 

  **Integer** (default: 100):  如果你有一个非常高的页面，你可以把它设置得更高

- `disableForReducedMotion` 

  **Boolean** (default: false):  为用户完全禁用纸屑。在这种情况下，' confetti() '承诺将立即解决。

