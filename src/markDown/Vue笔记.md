# Vue笔记

这是我自己学习过程中的记录，通过记录来更好的对所学知识进行掌握，学习中参考了B站尚硅谷Vue视频、Vue官网和《Vue的设计与实现》，Vue官网上的教程很完善和全面，想对Vue有全面的认识可以阅读官网教程。


Vue特点：

- 采用**组件化**模式，提高代码复用率，让代码更好维护

  一个Vue文件就是一个组件，script，HTML，CSS在一个Vue文件中编写

- **声明式**编码 ，无需直接操作DOM,提高开发效率

- 使用**虚拟DOM和Diff算法**，更加有效更新页面，页面内容变化会进行对比更为合适的更新页面DOM



## 初识

在Vue官网下载Vue.js文件，在HTML文件中引入，在script标签中创建Vue实例进行使用；

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vue</title>
</head>
<body>
    <div id="app">
        Hi~ o(*￣▽￣*)ブ，{{txt}}
    </div>
    <script src="./public/js/vue.min.js">
    </script>
    <script>
        const vm = new Vue({
            el: '#app',  // 用来指定当前Vue实例在那个内容内使用，通常使用ID选择器
            data: {
                txt: 'CImu'
            },
        })
    </script>
</body>
</html>
```

- 容器和实例是一对一关系，一个实例只能服务一个容器

- 可用使用el挂载容器，也可用使用$mount()挂载

- data有两种写法： 对象式和函数式，在**组件下必须使用函数式**

  - data中的属性以及Vue原型上的属性，在Vue模板语法中直接使用
  - data中的所有属性都会出现在vm身上

  ```
  new Vue({
  	el: '#app',
  	data: { 		// 对象式
  		txt: 'CImu'
  	},
  	data() {		// 函数式
  		return {
  			txt: 'Cimu'
  		}
  	}
  })
  ```

  

## 插值语法

写法： {{ 变量名 }}，在**标签体**中来插入变量或表达式显示；

```html
 <div id="app">
 	Hi~ ，{{txt}}
 </div>
 <script>
    const vm = new Vue({
        el: '#app',
        data: {
            txt: 'CImu'
        },
    })
 </script>
```



## 内置指令

### 指令合集

| 指令名            | 说明                                                         |
| ----------------- | ------------------------------------------------------------ |
| v-bind            | 单向绑定解析表达式，可简写为 :xxx                            |
| v-model           | 双向数据绑定                                                 |
| v-for             | 遍历数组/对象/字符串                                         |
| v-on              | 绑定事件监听，可简写为@                                      |
| v-if              | 条件渲染 (动态控制节点是否存存在)                            |
| v-else/ v-else-if | 条件渲染(动态控制节点是否存存在)                             |
| v-show            | 条件渲染 (动态控制节点是否展示)                              |
| v-text            | 渲染所在节点内容，会把节点原来内容覆盖                       |
| v-html            | 渲染内容，会把节点内容覆盖，可以解析HTML标签                 |
| v-cloak           | 没有效果，可以配合CSS属性选择器解决网速慢时不加载有问题的节点 |
| v-once            | 节点只初次渲染，数据改变不会重新渲染                         |
| v-pre             | 预保留效果，不会进行Vue解析渲染                              |

### 单向数据绑定

写法： `v-bind:属性名="变量名",`  简写： `:属性名="变量名"` 用于标签属性指定变量或表达式，页面可展示data中数据；

```html
<div id="app">
 	<a v-bing:href="url">跳转</a>
 </div>
 <script>
    const vm = new Vue({
        el: '#app',
        data: {
            url: 'www.baidu.com'
        },
    })
 </script>
```

### 双向数据绑定

写法: `v-model:属性名="变量"`，用于表单类标签属性的绑定，数据可用从data中展示数据，也可用把页面中数据赋值给data变量

v-mode默认绑定为value属性，不写绑定属性名则为默认

```html
<div id="app">
    <input v-model:value="text" />
 </div>
 <script>
    const vm = new Vue({
        el: '#app',
        data: {
            text: 'hhh'
        },
    })
 </script>
```



## 自定义指令

### 初识

通过配置对象 `directives` 来定义自定义指令，有两种定义的方式： 1. 函数式、2. 对象式

#### 全局定义

使用 `Vue.directive('name', function(element, binding) { ... }) `进行定义

### 函数式

函数接收两个参数：

| 参数             | 说明                  |
| ---------------- | --------------------- |
| 参数一： element | DOM元素，非Vue虚拟DOM |
| 参数二： binding | Vue提供的元素信息对象 |

函数式为简易的定义模式，示例如下：

```html
<div id="app">
    <h1>{{n}}</h1>
    <h1 v-ten="n"></h1>
</div>

<script src="./public/js/vue.min.js"></script>
<script>
    new Vue({
        el: "#app",
        data: {
            n: 1,
        },
        directives: {
            ten(element, binding) {
                element.innerText = binding.value * 10;
            }
        },
    })
</script>
```

### 对象式

对象式可以配置三个钩子函数，更加细节的控制

| 钩子                           | 说明                             |
| ------------------------------ | -------------------------------- |
| bind(element, binding) { }     | 当指令与元素成功绑定时调用       |
| inserted(element, binding) { } | 当指令所在元素被插入到页面时调用 |
| update(element, binding) { }   | 当指令所在模板被重新解析时调用   |

输入框聚焦和文字提示显示案例：

```html
<div id="app">
    <h1>{{n}}</h1>
    <input v-focus type="text" v-model="n">
    <button @click="n++">N加一</button>
</div>

<script src="./public/js/vue.min.js"></script>
<script>
    new Vue({
        el: "#app",
        data: {
            n: 1,
        },
        directives: {
            focus: {
                bind(element, binding) {
                    element.value = "初始值：" + element.value;
                },
                inserted(element, binding) {
                    element.focus();
                },
                update(element, binding) {
                    element.value = "update:  " + parseInt(element.value);
                    element.focus();
                }
            }
        },

    })
</script>
```

### 注意

#### 指令名

​	不支持大写，不能写大小驼峰模式，需要使用 `-` 分隔

​	例： 指令写法： `v-fist-word`， 定义写法： `'fist-word'() { ... } `

#### this

​	函数内的this指向window, 而非vm实例对象



## 生命周期

每个 Vue **实例**在被创建时都要经过一系列的初始化过程 —— 例如：需要设置数据监听、编译模板、将实例挂载到 DOM 并在数据变化时更新 DOM 等。同时在这个过程中也会运行一些叫做**生命周期钩子**的函数，Vue给了用户在不同阶段添加自己的代码的机会。

生命周期又名：生命周期回调函数、生命周期函数、生命周期钩子

生命周期函数的名字是Vue提供，不可修改

函数中的this指向vm或组件实例对象



### 关键时间解析

#### beforeCreate

时机： 在初始化生命周期、事件后调用

结果： 数据代理还未开始，此时无法通过vm访问data中的数据、methods中的方法

#### created

时机： 初始化数据监测、数据代理

结果： 可以通过vm访问data中的数据、methods中的方法

#### beforeMount

时机： Vue开始解析模板，然后生成虚拟DOM（内存中）后调用

结果： 页面还不能显示Vue解析后的页面，对真实DOM进行的操作最终会无效

#### mounted

时机： 当虚拟DOM转换为真实DOM插入页面后调用

结果： 页面展示的是Vue编译后的DOM，一般在此时机进行：设置定时器、发送网络请求、绑定自定义事件等初始化操作

#### beforeUpdate

时机： 当data中数据发生变化后调用

结果： data中的数据的最新的，但是页面上展示的数据还是旧的

#### updated

时机： 根据新数据生成新虚拟DOM，与旧虚拟DOM比较（算法）等操作后，完成页面更新

结果： 页面上展示更新后的数据，页面数据同步完成

#### beforeDestroy

时机： 当vm.$destroy()被调用时

结果： 实例还未被销毁，data、methods、指令还可用，此时对数据进行修改页面将不会进行更新，

一般在此阶段：关闭定时器、取消订阅消息、解绑自定义事件等收尾操作

#### destroyed

时机： 移除所有监听，清理它与其他实例的连接，解绑它的全部指令以及**自定义事件**监听器

结果： 一切都结束了，什么都没了，but, 其实原始触发事件还是存在的，不会销毁已经渲染的真实DOM上的原生存在的事件监听



### 官网生命周期图

![](source/lifecycle.png)

## MVVM模型

​	M: 	   模型（Model)  data中的数据

​	V: 		视图（View）模板（HTML内容）

​	VM：   视图模型（ViewModel)  Vue实例对象



## 事件处理

**v-on**指令绑定事件，简写为@

事件回调函数可用不加()结尾，例如：`@click="show"`

- 不传递参数时，实参可接收一个event

  ```
  @click="show"
  show(event){ console.log(event) }
  ```

- 传递参数时可用，传递一个形参$event

  ```
  @click="show2(36, $event)"
  show2(id, event) { console.log(id, evnet) }
  ```




### 事件修饰符

| 修饰符  | 说明                                             |
| ------- | ------------------------------------------------ |
| prevent | 阻止事件默认行为 - -  e.preventDefault()         |
| stop    | 阻止事件冒泡 - - e.stopPropagation()             |
| once    | 事件只触发一次                                   |
| capture | 使用事件的捕获模式                               |
| self    | 只有event.target时当前元素时触发事件             |
| passive | 事件的默认行为立即执行，无需等待事件回调执行完毕 |

:: 事件修饰都是可以连续写的

### 键盘事件修饰符

Vue中常用的按键别名:

|   enter   |  delete  |    esc    |
| :-------: | :------: | :-------: |
| **space** | **tab**  |  **up**   |
| **down**  | **left** | **right** |

其他按键可用使用按键的原始Key值进行绑定，驼峰要使用kebab-case

## 数据对象 - data

Vue实例的数据对象

**响应数据变化：**Vue会把data中你的属性转换为getter/setter加观察者模式： 数据改变 => 修改模板, 模板输入 => 修改数据

**数据代理：**data中属性可以用vm.$data访问原始数据对象，也可以直接在vm实例下访问（如： vm.a), 减少对数据属性访问层次

**写法**： 

- 对象式
- 函数返回式

在Vue组件下，data只能声明为函数形式

```vue
//纯粹对象
var vm = new Vue({
  data: {
		a: '1',
	}
});
//函数返回形式
var Component = Vue.extend({
  data: function () {
    return { a: 1 }
  }
})
```

### 数据代理 

**数据代理是什么**？

​	通过一个对象代理对另一个对象中的属性操作（读/写）

**Vue中数据代理**：

​	Vue实例中data中的属性会被代理到vm身上，可从vm中直接读取和修改，更加方便的操作data中数据



### 数据响应式

Vue会监视data中**所有层次**下的数据变化。

对数据的监测又分三种不同的情况：

1. 普通数据：

   - Vue 将遍历此对象所有的属性，并使用`Object.defineProperty`把这些属性全部转为`getter/setter`，对于对象和数组中的深层结构Vue也会进行递归遍历；

   - getter/setter 对用户来说是不可见的，它们是为了使Vue能够在属性被访问和修改时通知变更；

   - 只有`getter/setter`也不能实现响应式，每个组件实例都对应一个 **watcher** 实例（观察者设计模式），它会在组件渲染的过程中把“接触”过的数据属性记录为依赖。之后当依赖项的 setter 触发时，会通知 watcher，从而使它关联的组件重新渲染；

2. 对象中数据添加或移除

   - Vue 无法检测属性的添加或移除。属性必须在 `data` 对象上存在才能让 Vue 将它转换为响应式的，通过动态添加的方式（vm.c=1）无效；

   - Vue提供了`Vue.set(object, propertyName, value)/this.$set`方法向对象中添加响应式属性，但无法对data层根对象上添加属性；

   ```vue
   var vm = new Vue({
     data:{
   	obj1: {
   		a: 2
   	},
       a:1,
     }
   })
   
   Vue.set(vm.ojb1, 'b', 2);
   ```

3. 数组中数据添加或移除

   Vue没有对数组下每个值进行响应式处理，不能监视通过下标索引修改数组值，修改数组长度的变化；

   ```vue
   var vm = new Vue({
     data: {
       items: ['a', 'b', 'c']
     }
   })
   vm.items[1] = 'x' // 不是响应性的
   vm.items.length = 2 // 不是响应性的
   ```

   为了解决这些问题，Vue提供的`Vue.set(someArray, indexOfItem, newValue)`方法也可以对数组使用；

   ```vue
   Vue.set(vm.items, 0, 'c');
   ```

   同时Vue也对数组原生构造函数的一些方法进行重写，通过这些方法修改后的变化会支持响应式，方法如下：

   | push()    | pop()     |
   | --------- | --------- |
   | shift()   | unshift() |
   | splice()  | sort()    |
   | reverse() |           |

   `filter()`,`concat()`,`slice()`这些方法会返回一个新数组，可以赋值为新数组，这样属性也是支持响应式

   

## 计算属性 - computed

一种对数据的处理方式，可以被缓存，属性会被代理到VM身上，有两种写法： 1.简写、2.完整写法 

### 简易写法

简写形式下只能读取 ，不能修改

```javascript
new Vue({
    el: '#app1',
    data: {
        x: 0,
        y: 2,
    },
    computed: {
        sum() {
            return this.x = this.y;
        }
    }
})   
```

### 完整写法

完整写法需要配置 `get()` 和 `set()` 函数

- get()会在有人调用返回 `return值`；get被调用有以下情况：
  - 有人初次调用sum时
  - 当所依赖的数据发生变化时
- set()会在有人修改时调用，接收修改的数据值

```javascript
new Vue({
    el: '#app1',
    data: {
        x: 0,
        y: 2,
    },
    computed: {
    	// 完整写法    
        sum: {
            // this指向vm
            get() {
                return this.x + this.y;
            },
            set(val) {
              this.x = 2;
              this.y = val / this.x;
            }
        }
    }
})
```

### 注意

- **不能为箭头函数**，不然会丢失this
- 没有定义set方法不能主动修改计算属性
- 计算属性结果会被**缓存**，相同不会多次被计算



## 监听属性 - watch

可以对数据进行监听，当监测的数据发生变化时调用处理函数，可以有两种写法： 1. 简易写法、2. 完整写法

### 简易写法

简易函数只能实现简单的功能，不能对象进行深度监听等，函数接收两个参数：

| 参数            | 说明           |
| --------------- | -------------- |
| 参数一 ：newVal | 数据变化后的值 |
| 参数二： oldVal | 数据原本的值   |

```javascript
new Vue({
    el: '#app',
    data: {
        x: 0,
    },
    watch: {
        x(newVal, oldVal) {
          console.log(newVal, oldVal);
        }
    }
})
```



### 完整写法

对象式写法，可以对监视模式进行更加完善的定义，接收三个属性值：

| 属性名    | 说明                                                   |
| --------- | ------------------------------------------------------ |
| deep      | 接收一个布尔值，监视多级结构所有属性的变化（深度监视） |
| immediate | 接收一个布尔值，功能我忘记了，后续补充。。。           |
| handler   | 接收参数和简易写法相同，在监测数据变化后调用           |

```javascript
new Vue({
    el: '#app',
    data: {
        x: 0,
        y: 2,
    },
    watch: {
        x: {
            deep: true,
            immediate: true,
            handler(newVal, oldVal){
                console.log(newVal, oldVal);
            }
        }
    }
})
```

### 全局定义

在Vue实例或VM实例下定义都可以，简易写法或完整写法都可以，例子：

```javascript
vm.$watch('y', {
    handler(newVal, oldVal) {
        console.log(newVal, oldVal)；
    }，
    deep: true,
})
```



## 父传子数据 - props

props用于接收来自父组件的数据，是单项数据流绑定

**写法**

- **数组型**: 数组型可以用快速的接收数据，数组中填写传递属性名的字符串

- **对象型**: 允许配置高级选项， 如类型检测、自定义验证和设置默认值，具体如下：

  | 属性名    | 说明                                                         |
  | --------- | ------------------------------------------------------------ |
  | type      | 可以是下列原生构造函数中的一种：`String`、`Number`、`Boolean`、`Array`、`Object`、`Date`、`Function`、`Symbol`、任何自定义构造函数、或上述内容组成的数组 |
  | default   | 为该 prop 指定一个默认值。如果该 prop 没有被传入，则换做用这个值 |
  | required  | 定义该 prop 是否是必填项                                     |
  | validator | 自定义验证函数会将该 prop 的值作为唯一的参数代入             |
  

### 示例

对象式属性名后可以只跟一个数据类型来规定类型，也可以属性名跟对象，进行高级选项配置

```
// 简单语法
Vue.component('props-demo-simple', 
    {
      props: ['size', 'myMessage']
    }
)

// 对象语法，提供验证
Vue.component('props-demo-advanced', 
	{
      props: {
        // 检测类型
        height: Number,
        // 检测类型 + 其他验证
        age: { 
        	type: Number,
        	default: 0,
        	required: true,
        	validator: function (value) { return value >= 0 }
        }
   	  }
	}
)
```




## 过滤器 - filter

**功能：** 对显示的数据进行指定效果过滤后在显示，不适合对数据进行复杂的逻辑处理

过滤器可以连续使用，比如 `{{ arr | arrFormater(4) | lastWord }}`

**注册**

| 注册位置 | 注册方法                         |
| -------- | -------------------------------- |
| 全局注册 | Vue.filter(filterName, callback) |
| 局部注册 | filters: { name(){ } }           |

**使用**

| 使用位置    | 使用方法                 |
| ----------- | ------------------------ |
| 插值语法    | {{ name \|  filterName}} |
| v-bind:属性 | ”name \| filterName“     |

**传参**

| 参数       | 说明                             |
| ---------- | -------------------------------- |
| 参数一     | 管道符前面的数据值               |
| 参数二 ~ N | 第二个参数开始按传递顺序接收参数 |

```
// 插值显示
{{ arr | arrFormater(4)}}

//接收参数
filters: {
    // 传参使用
    arrFormater(val, num = 2) {
		return val.filter(item => item > num);
	},
}
```

**案例**

```html
<body>
    <div id="app">
        <!-- 多过滤使用 -->
        {{ arr | arrFormater(4) | lastWord }}
    </div>

    <div id="app2">
        {{ arr |  lastWord }}
    </div>
    <script src="./public/js/vue.min.js"></script>
    <script>
        // 全局注册
        Vue.filter('lastWord', function(val) {
            return val.slice(-1)
        })
        new Vue({
            el: '#app',
            data: {
                arr: [1,2,3,4,5,6,7,8],
            },
            filters: {
                // 传参使用
                arrFormater(val, num = 2) {
                    return val.filter(item => item > num);
                },
            }
        })

        new Vue({
            el: '#app2',
            data: {
                arr: [4,3,2,1]
            }
        })
    </script>
</body>
```



## 样式绑定

### class样式绑定

**字符串写法**

```html
<style>
	.big-font {
        font-size: 36px;
    }
    .text-red {
        color: #f00;
    }
</style>
<h1 :class="titleA">待办事项</h1>
data: {
  		titleA: 'big-font text-red',
}
```

**对象写法**

```html
<!-- 写法一 -->
<h1 :class="{ 'big-font': isBig, 'text-red': isRed }">待办事项</h1>
data: {
  		isBig: true,
        isRed: true,
}
<!-- 写法二 -->
<h1 :class="classObject">待办事项</h1>
data: {
	classObject: {
		'big-font': true,
		'text-red': true,
	},
}
```

**数组写法**

```html
<!-- 可以使用三元表达式判断 -->
<h1 :class="[bigClass, isRed ? redClass : '']">待办事项</h1>
data: {
		bigClass: 'big-font',
        redClass: 'text-red',
        isRed: true,
}
```

### style样式绑定

```html
<!-- 字面量 -->
<h1 :style="{fontSize: font + 'px', color: red}">待办事项</h1>
<!-- 变量控制 -->
data: {
	font: 60,
	red: 'red',
}
```



## 条件渲染

### v-if

​	当不成立时，元素会完全删除，dom节点上进行删除, `if-else`需要连续写，分开写无效， 可以配合template标签使用

```html
<h2 v-if="n === '黄瓜'"> 黄瓜 黄瓜 黄瓜 </h2>
<h2 v-else-if="n === 西瓜"> 西瓜 西瓜 西瓜 </h2>
<h2 v-else> 东瓜 东瓜 东瓜 </h2>
```

### v-show

设置`display`属性为none，dom节点上可以看到，不能配合template标签使用

```html
<h2 v-show="true"> 黄瓜 黄瓜 黄瓜 </h2>
```



## 列表渲染

v-for指令

语法：

​	可以使用 `of` 或`in` 来循环， `v-for="(列表项，index) of 列表变量"` 

​	需要配置key，`:key=列表项唯一标识`

​	可以对数组、对象、字符串、指定数字进行遍历

```html
<ul>
	<li v-for="(item, index) of list" :key="item">
		{{item.name}} - {{item.size}}
	</li>
</ul>
data: {
	list: [
		{id: 001, name: '张', size: '120cm, 30kg'},
		{id: 002, name: '王', size: '130cm, 35kg'},
		{id: 003, name: '李', size: '140cm, 40kg'},
	],
}
```

**key的作用：**在vue中dom更新前会先进行虚拟dom的对比算法，在列表循环渲染时，通过key值作为唯一标识，来判断新dom和旧dom是否相同的元素；



## ref属性

功能：标签属性，在vue中用来**获取DOM**的方法，在标签指定 `ref`属性，可从 `vm.$refs`中取得；

ref写在`HTML元素`上时，可以获取到相应的`DOM`；

ref写到`vue组件`上时，可以获取到当前组件的`实例对象`；

```HTML
<h1 ref='title'>这是标题</h1>

const h1 = this.$refs.title;
```



## 插槽 - slot

**功能：**在组件编写时定义一个占位，当组件被使用时标签体中的内容会放到定义的占位处

### 默认插槽

**Index.vue**

```vue
<template>
	<div class="container">
        <Type>
           <p>
别学{{books1}}啦，"前端已死", 你这努力学了这么久，（从零开始自学半年的程度）也不会有很好的就业环境，不是说现在你掌握了前端基本三剑客，就可以实习或当一个初级工程师，没有经验就没有工作机会！！！除非你学到精锐到源码级别，掌握计算机网络，各种框架，有些大公司还会进行算法考核，最主要的是会有公司让后端工程师来些前端，总之，新入坑就换个赛道把，可以走的更远！！！
    		</p>
    	</Type>
        <Type>
            <ul>
                <li v-for="item in books2">{{ item }}</li>
    		</ul>
    	</Type>
        <Type>
            <ul>
                <li v-for="item in books3">{{ item }}</li>
    		</ul>
    	</Type>
    </div>
</template>

<script>
	import Type from '@/components/Type'
    
    export default {
        name: 'Index',
        components: {Type},
        data() {
            return {
                books1: 'html, js, css',
                books2: ['react', 'vue', 'ts'],
                books3: ['java', 'mysql', 'python'],
            }
        }
    }
</script>
```

**Type.vue**

```vue
<template>
	<div class='type'>
        <h1>热门分类</h1>
        <slot></slot>
    </div>
</template>

<script>
export default {}
</script>
```

> 样式写在使用组件或定义组件的地方都可以生效
>
> 在<slot>这是默认展示</slot>中也可以写一些默认的展示，在没有传递时展示



### 具名插槽

**功能：**指定插槽，把内容放到指定的slot中

**type.vue**

```vue
<template>
	<div class='type'>
        <h1>热门分类</h1>
        <slot name="txt"></slot>
        <slot name="list"></slot>
    </div>
</template>
```

**Index.vue**

```vue
<template>
	<div class="container">
        <Type>
            <p slot="txt"> 别学{{books1}}啦，"前端已死?!"</p>
            <p slot="txt">太难了/(ㄒoㄒ)/~~</p>
            <p slot="txt">什么时候可以财务自由啊！！！</p>
            <ul slot="list">
               <li v-for="item in books2">{{ item }}</li>
    		</ul>
    	</Type>
    </div>
</template>
```

>具名插槽可以写多个，不会进行覆盖，会顺序全部展示
>
>vue2.6新增： 当插入内容为template包裹时， 可以写成 `<template v-slot:txt>内容</template`



### 作用域插槽

**功能：**定义组件时在插槽标签中传递数据给组件使用插槽的地方使用，即实现在index.vue中<Type></Type>组件体中使用Type.vue下<slot>传递的数据

**Type.vue**

```vue
<template>
	<div class='type'>
        <h1>热门分类</h1>
        <slot :shuji="books"></slot>
    </div>
</template>
<script>
	export default {
        data() {
            return {
                books: ['html', 'js', 'css'],
            }
        }
    }
</script>
```

**Index.vue**

```vue
<template>
	<div class="container">
        <Type>
            <template scope="{shuji}">
				<ul>
                   <li v-for="item in shuji">{{ item }}</li>
                </ul>
			</template>
    	</Type>
		<Type>
            <template scope="typeData">
				<h3 v-for="item in typeData.shuji">{{ item }}</h3>
			</template>
    	</Type>
    </div>
</template>
```

> 作用域插槽就是取到组件中数据，然后对数据以不同的方式进行展示时使用

## 混入/混合 - mixin

**功能：** 用来抽离在Vue组件中**公用的配置项**

**例：** 组件1和组件2等组件...公用一个功能计时器，就可以编写一个混入，一处编写，多处引用即可；

**timeCount.js**

```javascript
export const tiemConut = {
    data() {
        return {
            weekday: {
                1: '星期一',
                2: '星期二',
                3: '星期三',
                4: '星期死',
                5: '星期五',
                6: '星期六',
                7: '星期日',
            },
            time: {
                yymmdd: '2022.12.26',
                weekday: '星期二',
                time: '08:23:34',
            },
        }
    },
    created() {
        // 设置header展示时间
        this.tiemInterval =  setInterval(() => {
        this.time.time = moment().format('HH:mm:ss');
        this.time.weekday = this.weekday[moment().weekday()];
        this.time.yymmdd = moment().format('YYYY.MM.DD');
        }, 1000);
    },
}
```

**组件中注册使用**

```vue
<template>
	<p class="time-box">{{`${curTime.yymmdd}    ${curTime.weekday}${curTime.time}`}}</p>
</template>
<script>
import moment from "moment";
import { tiemConut } from '../timeCount';

export default {
    name: 'VueComponent1',
    mixins: [tiemConut],
}
</script>
```

>个人理解：  复用某些功能有很多实现的方式，例如工具方法会抽离写在utils下、封装成一个组件之类的；但mixins给开发者提供了一种代码公用的方案，而且还可以data、钩子函数等配置项进行公用，这是一个特点；

### 特性

- 混合过来的代码，会融入到当前组件下
- 如果混合过来配置项与当前组件冲突，则会**优先采用当前组件配置**
- 对于**钩子函数配置**，会把当前组件和混合中的代码**全部保留**，并且**混合**中的代码在**前**，**当前组件**代码在**后**
- 混合也支持全局注册，在vue实例下进行配置，所有的vm，vc都可以使用



## 组件自定义事件

**功能：**实现子组件给父组件通信

在父组件中注册方法，通过`v-on`或`$on`给子组件绑定自定义事件，在子组件中使用`$emit`触发父级定义的方法，实现通信

### 案例

**Father.vue**

```vue
<template>
	<Son @setSonName="setSonName" />
  	<div>儿子名： {{ sonName }}</div>
</template>

<script>
import Son from '../Son';
    
export default {
    data() {
        return {
            sonName: '',
        }
    },
    components: { Son },
    methods: {
        setSonName(name) {
            this.sonName = name;
        }
    },
}
</script>
```

**Son.vue**

```vue
<template>
  	<div>{{ sonName }}</div>
	<button @click="sendName">发送</button>
</template>

<script>
export default {
    data() {
        return {
            name: '张三',
        }
    },
    methods: {
        sendName() {
            this.$emit('setSonName', this.sonName);
        }
    },
}
</script>
```

### 绑定语法

在父组件中定义方法，并使用`v-on`或`$on、$once`来绑定, $on、$once绑定需要先获取到组件实例

```vue
// 方法一
<Son @setSonName="setSonName" />

methods: {
    setSonName(name) {
    	this.sonName = name;
    }
}

// 方法二
<Son ref="son" />

methods: {
    setSonName(name) {
    	this.sonName = name;
    }
}
mounted() {
    this.$refs.son.$on('setSonName', this.setSonName);
},
```

### 使用语法

在子组件中使用`$emit`来触发

```vue
this.$emit('setSonName', this.sonName);
```

### 解绑语法

```js
// 单个解绑
this.$off('setSonName');
// 多个解绑
this.$off(['setSonName', 'setSonName2', 'setSonNam3']);
// 全部解绑
this..$off();
```

### 注意

**this指向的问题**

```vue
// 1.
mounted() {
	this.$refs.son.$on('setSonName', this.setSonName);
}

// 2.
mounted() {
    this.$refs.son.$on('setSonName', function(name) {
        this.sonName = name;
    });
},


// 3.
mounted() {
    this.$refs.son.$on('setSonName', (name) => {
        this.sonName = name;
    });
}
```

> 在方法一中，setSonName定义在methods中， methods下的普通函数vue设置this指向当前实例对象，所有this为当前实例对象
>
> 在方法二中，setSonName直接是一个普通函数，所以是谁触发了事件，this就指向谁，事件由son组件触发，this就为送实例对象
>
> 在方法三中，setSonName为一个箭头函数，箭头函数是没有自己的this，其this指向为外部的this，所以this为mounted()中的this

**原生事件触发**

```vue
<Son @click="show" />

<Son @click.native="show" />
```

> vue组件上绑定事件会默认为自定义事件，通过$emit来触发， 如果想使用原生的事件，使用 `native`修饰符



## 全局事件总线

**功能：**任意组件之间进行通信方法

全局事件总线要满足以下要求：

- 所有组件都可以调用到
- 总线对象可以调用$on、$off、$emit方法

**实现：**

组件实例对象都可以访问到VueComponent构造函数中的属性

VueComponent构造函数是由Vue.extend而来， 所以可以访问VM身上的属性

$on、$off、$emit方法也是存在于VM身上，所以可以把VM当作一个全局事件总线

**main.js**

```vue
import Vue from 'vue';
import App from './App.vue';

new Vue({
	el: '#app',
	render: h => h(App),
	beforeCreate() {
		// 配置全局事件总线
		Vue.prototype.$bus = this;
	}
})
```

**使用方法**

```vue
// 注册
this.$bus.$on('hello', (data) => {
	console.log(data);
})

// 调用
this.$bus.$emit('hello', [1,2,3,4])

// 销毁
this.$bus.$off('hello')
```



> 此方法非官方的，是利用自定义事件和Vue中设计的继承关系来实现的
>
> 此外，组件自定义事件在组件销毁时会自动销毁，但在全局事件总线中注册并不会销毁，需要自行销毁



## $nextTick

**功能：** 指定函数会在DOM解析更新后在执行

**语法：**`this.$nextTick(回调函数)`

**使用场景：**在改变数据后，要基于更新后的新DOM进行操作时，在$nextTick回调函数中编写

