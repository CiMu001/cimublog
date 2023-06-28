<template>
  <div class="GoodCheapFast">
    <p class="title">你希望项目是怎样的?</p>
      <div class="swtich">
        <input type="checkbox" id="good" v-model="good" @change="balance('cheap')">
        <label for="good" class="label">
          <div class="ball"></div>
        </label>
        <span>质量高</span>
      </div>
      <div class="swtich">
        <input type="checkbox" id="cheap" v-model="cheap" @change="balance('fast')">
        <label for="cheap" class="label">
          <div class="ball"></div>
        </label>
        <span>成本低</span>
      </div>
      <div class="swtich">
        <input type="checkbox" id="fast" v-model="fast" @change="balance('good')">
        <label for="fast" class="label">
          <div class="ball"></div>
        </label>
        <span>速度快</span>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            good: false,
            cheap: false,
            fast: false
        }
    },
    methods: {
        balance(noItem) {
            const { good, cheap, fast } = this;
            if(!good || !cheap || !fast) { return }
            this[noItem] = false;
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

body .title {
  font-size: 30px;
}

.swtich {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  margin-left: -40px;
  font-size: 18px;
}

.swtich:nth-child(2) {
  margin-top: 60px;
}

.swtich input{
  visibility: hidden;
}

.swtich label{
  position: relative;
  background-color: #d0d0d0;
  border-radius: 50px;
  cursor: pointer;
  display: inline-block;
  margin: 0 15px 0;
  width: 60px;
  height: 30px;
}

.ball {
  position: absolute;
  top: 3px;
  left: 3px;
  width: 25px;
  height: 25px;
  background-color: #fff;
  border-radius: 50px;
  animation: slideOff .4s linear forwards;
}

.swtich input:checked + .label .ball {
  animation: slideOn .4s linear forwards;
}

.swtich input:checked + .label {
  background-color: blueviolet;
}

@keyframes slideOn {
  0% {
    transform: translateX(0) scale(1);
  }

  50% {
    transform: translateX(20px) scale(1.1);
  }

  100% {
    transform: translateX(30px) scale(1);
  }
}

@keyframes slideOff {
  0% {
    transform: translateX(30px) scale(1);
  }

  50% {
    transform: translateX(20px) scale(1.1);
  }

  100% {
    transform: translateX(0) scale(1);
  }
}
</style>