# JavaScript

## Array去重

```javascript
let arr = [1,2,3,4,4,3,2,1];
arr = Array.from(new Set(arr));
```

## Array转字符串

```javascript
let arr = [1,2,3,4,4,3,2,1];
let str = arr.join('');
```

## Number Array中最大/小值

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

## Number Array值累加

```javascript
const a = [1,2,3,4,5,6,7,8,9];
a.reduce((sum, i) => sum += i);
```

## String转换首字大写

```js
// 转换首字大写
export const fristWordToUpperCase = (str) => {
  const arr = Array.from(str)
  arr.splice(0, 1, arr[0].toUpperCase());
  return arr.join('')
}
```

## 深拷贝

```javascript
function deepClone(obj) {
  let result;
  if (Array.isArray(obj)) {
    result = [];
  } else if (typeof obj === "object") {
    result = {};
  } else {
    return obj;
  }
  Object.keys(obj).forEach((key) => {
    if (typeof obj[key] === "object") {
      result[key] = deepClone(obj[key]);
    } else {
      result[key] = obj[key];
    }
  });
  return result;
}
```

