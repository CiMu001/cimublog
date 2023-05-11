# HTML

超文本标记语言 (英语：Hypertext Markup Language，简称：HTML ) 是一种用来结构化 Web 网页及其内容的标记语言。 


## HTML基本结构

```html
<!DOCTYPE html>
<html>
    <head>
        <title>标签页名</title>
    </head>
    <body>
        内容体
    </body>
</html>
```

`<!DOCTYPE>`标签用来指定浏览器以何种方式解析，`html`标识为以HTML 5 解析



## HTML标签 

#### 标题标签

```html
<h1> 标签1 </h1>
<h2> 标签2 </h2>
<h3> 标签3 </h3>
<h4> 标签4 </h4>
<h5> 标签5 </h5>
<h6> 标签6 </h6>
```

`h1`~`h6`字体大小从大到小递减，`h4`为正常字体大小，自带上下边距，字体加粗

#### 段落标签

```html
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
```

段落标签，块级元素，会独占一行

#### 预定义格式标签

```html
<pre>
body {
  color: red;
}
</pre>
```

预定义格式文本，标签中文本会按照原文件中的编排进行展示，不会进行空白字符自动缩略

#### 超链接标签

```html
<a href="https://baidu.com" target="_blank">Website</a>
<a href="cimu91894@qq.com">Email</a>
<a href="tel:+123456789">Phone</a>
```

`href`属性指定指向其他网页、文件、同一页面内的位置、电子邮件地址或任何其他 URL

- 外部链接 `href="https://baidu.com"`

- 链接到本页中的某处

  ```html
  <h1 id="text_point">测试锚点</h1>
  <pre id="code_point">
  	代码块:
  	<code>
          main(){
              print('holle, word~')
          }
  	</code>
  </pre>
  <a href="#">跳转至最顶部</a>
  <a href="#text_point">点击跳转至测试锚点</a>
  <a href="#code_point">点击跳转至代码锚点</a>
  ```

- 空链接`href=javascript:void(0)或javascript:;`

`target`属性设置如何展示链接的资源，可以设置`_self`在当前页覆盖打开, `_blank`在新窗口打开

- 链接至iframe, 设置a标签的`target`属性为iframe的`name`属性

  ```html
  <a href="./welcome.html" target="main">首页大厅</a>
  <a href="./test/html" target="main">testPage</a>
  <iframe src="./welcome.html" name="main" frameborder="0"></iframe>
  ```

  

#### 换行、水平分割线标签

```
<br>
<hr>
```

`br`换行功能； `<hr>`水平分割线，自闭和标签

#### 图像标签

```html
<img src="./imges/头像2.jfif" alt="头像二图片" title="头像" width="100px" height="100px">
```

`<img>`图像文件插入

`src`属性是必须的，来指定插入图片的文件路径

`alt`属性是对图片无法正常加载时提供的提示信息

`width/height`属性设置图片的大小

#### 样式标签

```html
<b>粗体文本</b>

<i>斜体文本</i>

<big>大号文本</big>

<small>小号文本</small>

<span>1<sup>2</sup></span> <!-- 上标文本 1的二次方 -->

<span>O<sub>2</sub></span> <!-- 下标文本 氧气的化学公式 -->

<mark>有记号的文本</mark>

<bdo dir="rtl">文字从右向左显示</bdo>

<tt>等宽字体</tt>
```



#### 语义化标签

标签不一定会有自身样式，但标签带有指定的内容意义，更好的语义化编程和SEO（搜索引擎优化）

```html
<em>em 斜体</em><br>

<strong>strong 加粗</strong><br>

<del>del标签</del><br>

<ins>ins标签</ins><br>

<var>x</var>=<var>1</var>+<var>y</var><br>

<abbr title="详细展示信息">缩文</abbr><br>

当前时间:<tiem>9:00</tiem>,<tiem datatime="2022-09-27-8:20">早上</tiem>有课<br>

<address>
    <p>张三</p>
    <p>152999999</p>
    <p>江苏徐州</p>
</address>

<p>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit.<cite>—— 本文来自《读者》</cite>
</p>

<blockquote>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aperiam nobis, rem similique tempora quas et quasi deleniti repellendus ut mollitia, ea repudiandae alias minima omnis quam. Iusto tempora eveniet laboriosam voluptatum eum officiis aperiam delectus voluptas id suscipit repudiandae molestias explicabo odit illum sequi necessitatibus vitae fugit reprehenderit cumque cupiditate, aliquid eius at 
</blockquote>

<kbd>CTRL</kbd>+<kbd>C</kbd>进行复制
```

结果：

<img src=".\source\语义化结果图.png"/>



#### 常用实体符号

```html
<!-- 空格 -->
&nbsp;

<!-- 版权符号（©） -->
&copy;

<!-- 与符号（&） -->
&amp;

<!-- 小于号（<） -->
&lt;

<!-- 大于号（>) -->
&gt;

<!-- 双引号（"） -->
&quot;
```



#### 列表标签

##### 	无序列表

```html
<ul>
    <li>列表项</li>
    <li>列表项</li>
    <li>列表项</li>
</ul>
```

默认带有实心圆点



##### 	有序列表

```html
<ol>
    <li>列表项</li>
    <li>列表项</li>
    <li>列表项</li>
</ol>
```

默认带阿拉伯数字编号标识

`reversed`属性设置倒序排序

`start`属性设置列表编号的起始值

`type`属性设置编号的类型：

- `		a`小写字母编号

- `A`大写字母编号

- `i`小写罗马数字编号

- `I`大写罗马数字编号

- `1`默认阿拉伯数字编号

  

##### 	定义列表

```
<dl>
    <dt>学生</dt>
    <dd>学生1</dd>
    <dd>学生2</dd>
    <dd>学生3</dd>
    <dt>班级</dt>
    <dd>班级1</dd>
    <dd>班级2</dd>
    <dd>班级3</dd>
</dl>
```

`<dl>`一个包含术语定义以及描述的列表，通常用于展示词汇表或者元数据 (键 - 值对列表)。

`<dt>`术语项，`<dd>`描述项



##### 表格

```html
<table>
    <caption>课程表</caption>
    <thead>
        <tr><th colspan="3">前端班课程表</th></tr>
    </thead>
    <tbody>
        <tr>
            <td>第一节课</td><td>第二节课</td><td>第三节课</td>
        </tr>
        <tr>
            <td>HTML</td><td>CSS</td><td>JavaScript</td>
        </tr>
        <tr> 
            <td>Vue</td><td>React</td><td>CSS3</td> 
        </tr>
        <tr>
            <td>Sass</td><td>Less</td><td>ElementUI</td>
        </tr>
    </tbody>
</table>
```

使用`<caption>`(表格的标题),`<thead>`(表头),`<tbody>`(表体)，`<tr>`(行)，`<td>`（列）,`<tfoot>`来自定义表格；

合并单元格：

- ​	`colspan`属性设置<u>**列**</u>单元格合并
- ​	`rowspan`属性设置**<u>行</u>**单元格合并
- ​	属性都接收一个正整数标示合并的单元格数量



#### 媒体播放器

##### 音频

```html
<audio id="boom" src="./mp3/僵尸游戏樱桃炸弹.mp3"></audio>
```

###### 属性

- `src`属性指定嵌入媒体的路径
- `autoplay`布尔值属性，音频会自动播放，不会等整个文件下载完成
- `controls`声明了该属性，浏览器会提供一个音频的控制哦面板
- `loop`布尔值属性，音频自动播放

###### 事件

- `play`开始播放
- `pause`暂定播放



##### 视频

```html
<video src="./resource/柴一品-09-28.mkv" controls width="800"></video>
```

###### 属性

- `controls`添加控制面板
- `src`指定文件路径
- `width`设置宽度
- `loop`布尔值，循环播放

###### 事件

- `play`
- `pause`



##### Source

```html
<audio controls>
    <source src="./resource/hit.mp3">
    <source src="./resource/僵尸游戏樱桃炸弹.mp3">
    <source src="./resource/用鼠标点击的声音.mp3">
</audio>
```

<aoudio>`或`<video>下使用标签，可以指定多个媒体资源，依次加载，有资源加载成功停止加载

`src`属性指定文件的路径



#### 分区标签

##### 通用分区

- `	<div>` 块级分区标签
- `<span>` 行内分区标签

##### 页面分区

- `<header>` 头部分区
- `<main>` 主题分区
- `<footer>` 页脚分区

##### 节段分区

- `<article>` 文章分区
- `<section>`章节分区
- `<nav>`导航分区
- `<aside>`侧边分区

##### 功能分区

- `<style>` 样式分区
- `<script>`脚本分区
- `<template>`模板分区
- `<iframe>`内联框架 



#### 表单标签

`<form>`元素标识一个区域，其中包含交互的控件元素，收集用户输入信息

```html
<form action="#" method="get">
    <div>
        <label for="name">姓名</label>
        <input type="text"  name="name" id="name" placeholder="enter your name">
    </div>
    <div>
        <label for="pas">密码</label>
        <input type="password"  name="password" id="pas" placeholder="enter your
        password">
    </div>
    <button>提交</button>
</form>
```



###### 属性

- `action`：指定表单提交的URL

- `method`：指定表单提交的方法，采用HTTP方法一般取值：
  - `post`： 表单数据会携带在`form data`中发送给服务器
  - `get`： 表单数据会携带在URL中，并以`？`分隔发送给服务器
- `enctype`: 只有在`method='post'`才使用，属性指定表单数据发送给服务器之前如何对其编码，一般有一下取值：
  - `application/x-www-form-urlencoded`：默认值，发送前会对所以字符进行编码（将空格转换为`+`，特殊符号转换为ASCII HEX值）
  - `multipart/form-data`: 不对字符进行编码，在有文件上传控件时，必须设置为该值
  - `text/plain`:  将空格转换为`+`符号，不会对特殊字符进行编码



#### 表单元素标签

##### 输入框  <input>

`<input>`元素是Web表单中交互控件，来接收用户输入的数据，元素有各种类型接收不同类型的数据。

```html
<label for="name">输入你的姓名：</label>
<input type="text" name="name" id="name">
```

可以配合`<label>`使用，`<input>`的**id**值 和 `<label>`的**for**值进行绑定， 在点击label时input也会获取焦点

###### 属性

- `type`：决定值`<input>`的工作方式，默认取值为`text`，具体属性值参考下面TYPES
- `name`： 元素名，提交表单时数据的key值                                      ---*此属性在大多数表单控件中都存在*
- `value`： 元素值， 提交表单时数据的value值                               ---*此属性在大多数表单控件中都存在*
- `required`： 设置控制为必填，不填会触发表单校验，                ---*此属性在大多数表单控件中都存在*
- `checked`： type为单选和复选框时，标为选中状态
- `disabled`:  标识控件不可用，表单提交时不会进行提交              ---*此属性在大多数表单控件中都存在*
- `readonly`:   控件不可被修改，在表单提交时会进行数据提交
- `placeholder`:  输入框提示文字
- `pattern`：  校验控件值的正则表达式，仅在 `type` 属性的值为 `text、search、tel、url 或 email` 时生效，否则将被忽略

###### TYPES

- `password`: 输入的数据会以密文模式展示

- `checkbox`： 复选框
- `radio`:  单选框
- `number`:  数字输入的控件，默认会带有动态键盘调整数值
- `date`：  日期输入控件（`年-月-日`），浏览器支持下可以打开日期选择器
- `month`：  年月输入控件（`年-月`）
- `week`： 年和周数的控件（`年-周数`）
- `time`：  时间的输入控件(`时-分`)
- `datetime-loacl`:  日期和时间的输入控件（`年-月-日T时-分`）
- `email`：  编辑邮件的控件， 会自带有邮件格式的表单值校验
- `tel`： 用于电话号码的输入控件
- `url`：  用于url输入的控件，会自带url校验
- `file`： 文件选择控件， 可以使用`accept`属性指定文件的类型
- `range`：  滑动块输入， 默认值的中间值， 可以使用`min max`属性指定范围
- `search`： 用于搜索字符串文字输入区， 会带有一个删除按钮用来清空区域
- `submit`：  用于表单的提交，触发表单的提交行为

- `button`： 没有默认行为的按钮

- `color`:  颜色选择控件
- `image`： 图像的`submit`按钮, src属性指定路径
- `hidden`:  不显示的控件，但值仍会表单提交



##### 文本域

```html
<textarea name="story" rows="10" cols="30">....</textarea>
```

###### 属性

- `name`： 指定表单提交时的key值
- `rows、cols`： 指定文本域的精确尺寸，一般为可以显示的字符的个数
- 不支持value属性，开始标签和闭合标签之间的默认内容
- `maxlength`:  文本的最大长度
- `warp`：  文本的换行的方式，默认为`soft`, 可取值：
  - hard: 在文本到达元素最大宽度的时候，浏览器自动插入换行符 (CR+LF) 。比如指定 `cols`值。
  - soft: 在到达元素最大宽度的时候，不会自动插入换行符。



##### 下拉列表框

```html
<select name="subject">
    <option value="1">语文</option>
    <option value="2">数学</option>
    <option value="3">生物</option>
</select>
```

- 每个 `<option>` 元素都应该有一个 [`value`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/option#attr-value) 属性，其中包含被选中时需要提交到服务器的数据值。

- 如果不含 `value` 属性，则 `value` 值默认为元素中的文本。你可以在 `<option>` 元素中设置一个 [`selected`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes#attr-selected) 属性以将其设置为页面加载完成时默认选中的元素。

- 可以将 `<option>` 元素放在[`optgroup`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/optgroup) 元素中以为下拉菜单创建不同的选项分组

###### 属性

- `disabled`:  禁用， 接收布尔值
- `multiple`:  设置列表中的选项是否支持多选， 接收布尔值， 默认为false



##### 按钮

`<button>` 元素表示一个可点击的按钮

###### 属性

- `disabled`： 布尔值， 禁用效果
- `form`：  关联form元素，必须和form元素在同一个文档中
- `type`： button的类型，可选值： 
  - `submit`: 此按钮将表单数据提交给服务器。如果未指定属性，或者属性动态更改为空值或无效值，则此值为默认值。
  - `reset`: 此按钮重置所有组件为初始值。
  - `button`: 此按钮没有默认行为。
  - `menu`: 此按钮打开一个由指定[`menu`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/menu)元素进行定义的弹出菜单。



##### 字段域

对表单元素进行区块划分

```html
<form action="..." method="...">
    <fieldset>
        <legend>基本信息</legend>
        <div>
            <label for="name">姓名：</label>
            <input type="text" id="name" name="name" />
        </div>
    </fieldset>
    <fieldset>
        <legend>详细信息</legend>
        <div>
            <label for="phone">电话：</label>
            <input type="tel" id="phone" name="phone" />
        </div>
    </fieldset>
</form>
```

`<fieldset>`进行区域的划分

`<legend>`对划分区域的说明/标题



## HTML属性

> 记录遇到时觉得有必要记录/有意思的HTML属性， 并不是属性全书



### Pattern

指定文本输入框输入内容的正则表达式模式，控制输入符合指定规则的数据

```html
<input name="username" pattern="[A-Za-Z0-9]+">
```

> Pattern属性的值必须是一个有效的正则表达式
>
> Pattern属性只能应用于文本框、文本域和密码框等可输入文本的元素
>
> Pattern属性不会阻止用户输入非法字符, 表单提交时判断是否符合



### Download

带我研究研究在写

```html
<a href="file" download> dowenload file </a>
```



### contenteditable

contenteditable属性用于指定元素是否为可编辑

```html
<div contenteditable="true">
    此div中的文字可以被修改
</div>
```

> 属性可取值： true, false, inherit
>
> 不会阻止默认行为
>
> 安全性问题： XSS攻击、脚本注入



### hidden

指定元素是否隐藏，感觉v-show 应该是这个原理吧

```html
<div hidden> 你看不到了 </div>
```

>设置dispaly： none， dom结构上可以看到



### poster

指定在视频加载之前或播放之前显示的图片、视频音频播放控制面板

```html
<video controls="controls" poster="@/assets/logo.svg"></video>
```

> 只适用于`<video>`标签



### async

指定脚本是否应该异步加载

```html
<script src="script.js" async></script>	
```

> 脚本将异步加载，不会阻止页面的解析和渲染
>
> 异步加载的脚本可能会在页面的其他部分加载之前执行， 如果脚本依赖于页面的其他部分，可能会导致错误



### defer

指定脚本是否应该延迟加载

```html
<script src="script.js" defer></script>	
```

> 脚本将延迟加载，直到页面解析完成后再执行， 不会阻止页面的加载



### draggable

开启元素是否可以进行拖拽

```html
 <div draggable="true">111</div>
 <div draggable="true">222</div>
 <div draggable="true">333</div>
```

> 属性只是开启了元素可拖拽性， 具体拖拽的实现需要编写一系列的拖拽事件来实现
> 
> `dragstart`、`drag` 和 `dragend`等....

