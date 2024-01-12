<template>
  <div class="toolbar" ref="toolbar">
    <div class="item">
      <b-icon class="zhuan-icon" icon="gear-fill" style="color: #fff; width: 20px; height: 20px;"></b-icon>
    </div>
    <div class="item" @click="switchSnow">
      <b-icon class="zhuan-icon" icon="snow" style="color: #fff; width: 20px; height: 20px;"></b-icon>
    </div>
    <div class="item" @click="toTop" :style="{ display: show ? 'block' : 'none' }">
      <b-icon class="up-top" icon="caret-up-fill" style="color: #fff; width: 20px; height: 20px;"></b-icon>
    </div>
  </div>
</template>

<script>
import { switchSnow } from '@/utils/snowflake';

export default {
  data() {
    return {
      show: false,
      switchSnow,
    };
  },
  mounted() {
    // 添加监听事件
    window.addEventListener("scroll", this.scrolling);
    // const curDom = this.$refs.toolbar;
    // console.log(curDom.parentElement.scrollTop);
    // 进入默认下雪
    switchSnow();
  },
  methods: {
    scrolling() {
      let current = Math.floor(document.documentElement.scrollTop || document.body.scrollTop);
      this.$store.commit('setCurTop', current)
      let vh = parseInt(window.innerHeight / 3 * 1);
      if (current >= vh) {
        this.show = true;
      } else {
        this.show = false;
      }
    },
    toTop() {
      // 获取当前滚动条的位置
      let top = document.documentElement.scrollTop || document.body.scrollTop;
      // 滚动动画
      const timeTop = setInterval(() => {
        document.body.scrollTop = document.documentElement.scrollTop = top -= 50;
        if (top <= 0) {
          clearInterval(timeTop);
        }
      }, 10);
    },
  },
}
</script>

<style scoped>
.toolbar {
  position: fixed;
  bottom: 32px;
  right: 32px;
  /* transform: translateX(100px); */
  transition: transform 0.5s;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.item {
  background-color: #7952b3;
  padding: 5px 6px 4px;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.5s;
}

.item:hover {
  transform: scale(0.9);
}
.zhuan-icon {
  animation: zhuan 10s infinite;
  transform-origin: center;
}
a {
  text-decoration: none;
  display: block;
}

@keyframes zhuan {
  0% { transform: rotateZ(0deg); }
  10% { transform: rotateZ(36deg); }
  20% { transform: rotateZ(72deg); }
  30% { transform: rotateZ(108deg); }
  40% { transform: rotateZ(144deg); }
  50% { transform: rotateZ(180deg); }
  60% { transform: rotateZ(216deg); }
  70% { transform: rotateZ(252deg); }
  80% { transform: rotateZ(288deg); }
  90% { transform: rotateZ(324deg); }
}
</style>