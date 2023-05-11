<template>
  <div class="card">
    <router-link :to="{ path }">{{ title }}</router-link>
    <span class="introduce">{{ introduce }}</span>
    <div class="type">
      <div class="dot" :class="language.toLowerCase()"></div>
      <span class="language">{{ language }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '这是一个标题',
    },
    language: {
      type: String,
      default: '编写语言',
    },
    introduce: {
      type: String,
      default: '这是一段描述',
    },
    path: {
      type: String,
      default: '',
    }
  },
}
</script>

<style scoped>

.card {
  padding: 16px;
  background-color: #fff;
  border: 1px solid #d0d7de;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 6px;
  flex: 1 240px;
  flex-shrink: 0;
  transition: all 0.2s;
}
.card:hover{
  box-shadow: 2px 2px 5px 2px rgb(133 133 133 / 60%);
}
.card .introduce {
  font-size: 14px;
  color: #8c95a0;
  margin: 2px 0;
  max-height: 40px;
  line-height: 20px;
  text-overflow: ellipsis;
  overflow: hidden;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.card .type {
  display: flex;
  gap: 10px;
  align-items: center;
}
.dot {
  width: 12px;
  height: 12px;
  margin-top: 2px;
  background-color: rgb(206, 206, 73);
  border-radius: 50%;
}
a {
  color: #0969da;
  font-size: 18px;
  text-decoration: none;
}


.css {
  background-color: blue;
}
.python {
  background-color: palevioletred;
}
.java {
  background-color: aqua;
}
.javascript {
  background-color: yellowgreen;
}
.vue {
  background-color: green;
}
.react {
  background-color: royalblue;
}
.html {
  background-color: rosybrown;
}
.c {
  background-color: cornflowerblue;
}
</style>