<template>
  <div class="card" @click="$router.push({path: data.path, query: data.query})">
    <img :src="randomImg" alt="随机图片" >
    <div class="body">
      <div class="head">{{ data.title }}</div>
      <div class="foot">
        <div class="left">
          <b-icon icon="bar-chart-steps" style="margin-right: 4px"></b-icon>
          <span class="align-center"><b-icon icon="book"></b-icon>{{ data.type }}</span>
          <b-icon icon="bookmark-dash" style="margin-right: 4px"></b-icon>
          <span v-for="tag in data.tags" :key="tag" class="align-center" style="gap: 1.5px">
            <span class="tag">#</span>{{ tag }}
          </span>
        </div>
        <div class="right">
          <span class="align-center">
            <b-icon icon="calendar-week"></b-icon>
            {{ data.updateTime }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      randomImg: ''
    }
  },
  props: {
    data: {
      type: Object,
      default: {
        id: Date.now(), title: 'CSS学习笔记',
        pathName: 'note/css',
        type: '学习笔记',
        tags: ['CSS', '用工学习'],
        updateTime: '2022-11-20'
      }
    }
  },
  mounted() {
    // 有个坑人情况，有些id图片不存在，缩小到了id80一下
    let randomId = Math.floor(Math.random() * 80);
    this.randomImg = `https://picsum.photos/id/${randomId}/140/80`;
  },
  methods: {
  }
}
</script>

<style scoped>

.card {
  flex-basis: 47%;
  flex-shrink: 0;
  flex-grow: 1;
  border-radius: 4px;
  height: 80px;
  padding: 13px;
  margin-top: 16px;
  background-color: #f2f6fc;

  display: flex;
  gap: 32px;
}
.card img {
  border-radius: 4px;
  transition: transform 0.5s;
  cursor: pointer;
}
.card img:hover {
  transform: scale(1.1);
}
.card .body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5px 0;

  flex-grow: 1;
}
.card .body .head {
  font-size: 22px;
  color: #1677b3;
  cursor: pointer;
}
.card .body .head:hover {
  color: #c67d0f;
}
.card .body .foot {
  display: flex;
  justify-content: space-between;
}
.card .body .foot .left {
  display: flex;
  align-items: center;
  gap: 1.6px;
  font-size: 14px;
  font-weight: 600;
}
.card .body .foot .left>span {
  padding:  3.2px 8px;
  border-radius: 5px;
  transition: all 0.5s;
  cursor: pointer;
}
span.tag {
  font-size: 18px;
  color: #d0d7dd;
}
.card .body .foot .left>span:hover {
  background-color: #1677b3;
  color: #fff;
}
.align-center {
  display: flex;
  align-items: center;
  gap: 8px;
}
@media (width <= 560px) {
  .left > *:nth-child(n+3) {
    display: none;
  }
}
</style>