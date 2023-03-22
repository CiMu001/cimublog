<template>
  <div class="AnimatedCountdown">
    <label for="num">倒计时秒数：<input type="number" id="num" :value="num" @change="randNum"/></label>
    <div class="count" ref="count">
      <div class="num">
        <span :class="{'in': i == 1}" v-for="i in num" :key="i" ref="nums">{{ num - i + 1 }}</span>
      </div>
      <div class="txt">准备就绪</div>
    </div>
    <div class="end hide" ref='end'>
      <div class="go">GO!</div>
      <button id="replay" @click="restDom">Replay</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 3,
    }
  },
  mounted() {
    this.count();
  },
  methods: {
    randNum(e) {
      if(!e.target.value) return;
      this.num = parseInt(e.target.value);
      e.target.value = '';

      setTimeout(() => {
        this.restDom();
      }, 100);
    },
    count() {
      const { nums, count, end } = this.$refs;
      const controller = new AbortController();

      nums.forEach((num, index) => {
        const lastIndex = nums.length - 1;
        num.addEventListener('animationend', (e) => {
          if(e.animationName.match('goIn') && index !== lastIndex) {
            num.classList.remove('in');
            num.classList.add('out');
          }else if(e.animationName.match('goOut') && num.nextElementSibling) {
            num.nextElementSibling.classList.add('in');
          } else {
              count.classList.add('hide');
              end.classList.add('show');
              controller.abort();
            }
          }, { signal: controller.signal })
      })
    },
    restDom() {
      const { nums, count, end } = this.$refs;

      count.classList.remove('hide')
      end.classList.remove('show')

      nums.forEach((num) => {
          num.classList.value = '';
      })

      nums[0].classList.add('in');

      this.count();
    }
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.AnimatedCountdown {
  /* margin-top: 8rem; */
}
label { 
  color: rebeccapurple;
  font-size: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
}
input {
  font-size: 64px;
  border: none;
  outline: none;
  color: rebeccapurple;
}

.count, .end, .AnimatedCountdown {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.num {
  display: flex;
  justify-content: center;
  position: relative;
  width: 250px;
  height: 185px;
  overflow: hidden;
  font-size: 160px;
  color: aqua;
}

.num span {
  position: absolute;
  transform: rotate(120deg);
  transform-origin: bottom center;
}

.num span.in {
  animation: goIn 0.5s ease-in-out;
}

.num span.out {
  animation: goOut 0.5s ease-in-out;
}
.txt {
  font-size: 64px;
}

.go {
  font-size: 144px;
  animation: gogo 0.3s infinite;
}

.end button {
  padding: 10px 30px;
  font-size: 24px;
  border: none;
  outline: none;
  border-radius: 20px;
  color: rebeccapurple;
  cursor: pointer;
  /* background-color: aqua; */
}

.end button:active {
  transform: scale(0.98);
}

.hide {
  display: none;
  animation: hide 0.2s ease-out forwards;
}

.show {
  display: flex;
  animation: show 0.5s ease-out forwards;
}

@keyframes goIn {
  0% {
    transform: rotate(120deg);
  }
  30% {
    transform: rotate(-20deg);
  }
  60% {
    transform: rotate(10deg);
  }
  100%{
    transform: rotate(0deg);
  }
}

@keyframes goOut {
  0% {
    transform: rotate(0deg);
  }
  60% {
    transform: rotate(20deg);
  }
  100%{
    transform: rotate(-120deg);
  }
}

@keyframes show {
  0% {
    transform: scale(0);
  }
  60% {
    transform: scale(1.2);
  }
  100%{
    transform: scale(1);
  }
}

@keyframes gogo {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.7);
  }
  100%{
    transform: scale(1.15);
  }
}
</style>