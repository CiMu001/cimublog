# JavaScript

## 数组去重

```javascript
let arr = [1,2,3,4,4,3,2,1];
arr = Array.from(new Set(arr));
```

## 数组转字符串(不带 , 分隔)

```javascript
let arr = [1,2,3,4,4,3,2,1];
let str = arr.join('');
```

## Number数组中最大/小值

```javascript
// 方法一： 扩展运算符
Math.max(...arr);
Math.min(...arr);

// 方法二： call or apply调用
Math.max.apply(null, arr);
Math.min.apply(null, arr);

// 方法三： 先排序，然后取值
const sortArr = arr.sort((a, b) => a - b) 
sortArr[arr.length-1]  // 最大值
sortArr[0] // 最小值

```

