<template>
  <div class="bullet-chat">
    <div class="container" ref="container">
      <img src="@/assets/键盘.png" alt="视频">
      <div class="msg" style="left: 100%;">我是一条滚动的消息提示，我要滚过去咯...</div>
    </div>
    <div class="input-field">
      <input type="text" placeholder="在这里输入弹幕..." id="msg" v-model="msg">
      <button class="btn" @click="setchat">发送弹幕</button>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            colors: [
                '#05348b', '#f9a647', '#ffd301', '#535386', 
                '#013e29', '#fff', '#091c60', '#f82239'
            ],
            msg: '',
        }
    },
    methods: {
        // 不得已在vue中使用了原始dom，不推荐用的东西 。。。
        setchat() {
            const { colors, msg } = this;
            const { container } = this.$refs;
            if(!msg) { return; }
            // 生成msg dom
            const radomTop = Math.floor(Math.random()*60);
            const radomSpeed = Math.floor(Math.random() * 8);
            const radomColor = colors[parseInt(Math.random() * colors.length)];

            const newMsg = document.createElement('div');
            newMsg.innerHTML = msg;
            const containerWidth = container.clientWidth;
            const msgWidth = newMsg.clientWidth;
            let left = containerWidth;
            
            const style = {
                'position': 'absolute',
                'top': `${radomTop + 5}%`,
                'left': `${left}px`,
                'max-width': '450px',
                'width': '-moz-max-content',
                'width': 'max-content',
                'padding': '8px',
                'font-size': '24px',
                'font-weight': '700',
                'color': radomColor,
                'text-shadow': '0 0 4px #fff6',
                'overflow': 'hidden',
                'text-overflow': 'ellipsis',
            }
            Object.keys(style).forEach(key => {
                newMsg.style[key] = style[key];
            })
            container.appendChild(newMsg);
            this.msg = '';

            // 配置滚动
            let time = 0;
            let settiem = setInterval(() => {
                left--;
                newMsg.style.left = `${left}px`;
                if(left <= -msgWidth) {
                    left = containerWidth;
                    time++;
                }
                if(time > 2) {
                    newMsg.remove();
                    clearInterval(settiem);
                }
            }, radomSpeed);
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

/* body {
  min-width: 1440px;
} */

.container {
  position: relative;
  /* width: 1200px; */
  min-width: 900px;
  height: 540px;
  /* height: 680px; */
  margin: 50px auto;
  border: 1px solid #000;
  overflow: hidden;
}

.container img {
  width: 100%;
  height: 100%;
}

.container .msg {
  max-width: 450px;
  width: max-content;
  position: absolute;
  padding: 8px;
  font-size: 24px;
  font-weight: 700;
  color: aliceblue;
  text-shadow: 0 0 4px #fff6;
  overflow: hidden;
  text-overflow: ellipsis;
}

.input-field {
  width: 600px;
  margin: 20px auto;
  background-color: #e8e8e8;
}

.input-field input {
  width: 75%;
  height: 40px;
  border: none;
  padding: 5px 10px;
  outline: none;
  background-color: inherit;
  font-size: 20px;
}

.input-field .btn {
  width: 20%;
  height: 40px;
  font-size: 18px;
  margin-left: 4%;
  border: none;
  border-radius: 5px;
  background-color: #535386;
  color: aliceblue;
  transition: transform .6s;
  cursor: pointer;
}


.input-field .btn:active {
  transform: scale(0.96);
}
</style>