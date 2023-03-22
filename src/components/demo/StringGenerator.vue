<template>
  <div class="string-generator">
    <div class="container">
      <h2>字符串生成器</h2>
      <div class="show-box">
        <div class="show">{{ str }}</div>
        <img id="copy" src="@/assets/copy.png" @click="copy">
      </div>
      <div class="str-length">
        <label for="length">字符串长度</label>
        <input id="strlen" type="number" v-model="strLen" max="21" min="1" >
      </div>
      <div class="uppercase">
        <label for="length">包含大写字符</label>
        <input id="uppercase" type="checkbox" v-model="haveUpper">
      </div>
      <div class="lowercase">
        <label for="length">包含小写字符</label>
        <input id="lowercase" type="checkbox" v-model="haveLower">
      </div>
      <div class="numbers">
        <label for="length">包含数字字符</label>
        <input id="numbers" type="checkbox" v-model="haveNum">
      </div>
      <div class="symbols">
        <label for="length">包含特殊字符</label>
        <input id="symbols" type="checkbox" v-model="haveSymbol">
      </div>
      <button id="generator" @click="generatorStr">生成</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      str: '',
      strLen: 16,
      haveUpper: true,
      haveLower: true,
      haveNum: true,
      haveSymbol: true,
    }
  },
  methods: {
    generatorStr() {
      const { 
        strLen,  haveUpper, haveLower, haveNum, haveSymbol,
        getRandomUpper, getRandomLower, getRandomNumber, getRandomSymbol
      } = this;

      // 生成字符类型map, 方便后面每次随机取一个类型进行生成一个字符
      const typeMap = [
          !haveUpper || getRandomUpper, !haveLower || getRandomLower,
          !haveNum || getRandomNumber, !haveSymbol || getRandomSymbol
      ].filter( type => typeof(type) !== 'boolean')

      if(typeMap.length < 1) { this.str = '一个没选我怎么给你生成？'; return }
      if(strLen>21 || strLen<1) { this.str = '长度规则： max: 21, min: 1'; return }
      // 生成字符串
      let string = '';
      for(let i = 0; i< strLen; i++) {
          const randomnum = Math.floor(Math.random() * typeMap.length)
          string += typeMap[randomnum]()
      }
      
      this.str = string;
    },
    copy() {
      navigator.clipboard.writeText(this.str);
    },
    getRandomLower() {
      return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
    },
    getRandomUpper() {
      return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
    },
    getRandomNumber() {
      return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
    },
    getRandomSymbol() {
      const symbols = '!@#$%^&*(){}[]=<>/,.'
      return symbols[Math.floor(Math.random() * symbols.length)]
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
.container {
  width: 350px;
  padding: 32px;
  text-align: center;
  border-radius: 6px;
  background-color: #7952b3;
  box-shadow: 0 2px 10px #7952b350;
  color: #bfbfff;
}

.container>div {
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
}

.show-box {
  height: 50px;
  width: 100%;
  padding: 10px;
  margin: 15px 0;
  background-color: rgba(0,0,0,0.4);
}

.show-box .show {
  padding: 0 10px;
  /* color: #fff; */
  line-height: 35px;
}

.show-box img {
  padding: 5px;
  background-color: #bfbfff;
  border-radius: 2px;
  margin-right: 5px;
  cursor: pointer;
}

.show-box img:active {
  transform: scale(0.98);
}

.show-box~div {
  font-size: 14px;
}

.container button {
  width: 100%;
  padding: 10px 0;
  margin-top: 10px;
  text-align: center;
  letter-spacing: 5px;
  background-color: transparent;
  border-radius: 6px;
  border: none;
  outline: none;
  font-size: 20px;
  color: #bfbfff;
  cursor: pointer;
}

.container button:active, .container button:hover {
  transform: scale(0.98);
}
</style>