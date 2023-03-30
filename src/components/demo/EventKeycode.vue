<template>
  <div class="eventkeycode">
    <div class="container" ref="showTxt">
        <div class="item" v-if="!show">按下随意键盘按键</div>
        <div class="item" v-if="show">
            <span>event.key</span>
            <span>{{key === ' ' ? 'space' : key}}</span>
        </div>
        <div class="item" v-if="show">
            <span>event.keyCode</span>
            <span>{{keyCode}}</span>
        </div>
        <div class="item" v-if="show">
            <span>event.code</span>
            <span>{{code}}</span>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            show: false,
            key: '',
            keyCode: '',
            code: '',
        }
    },
    mounted() {
        window.addEventListener('keydown', (event) => {
            this.key = event.key;
            this.keyCode =  event.keyCode;
            this.code = event.code;
            this.show = true;
        });
    }
}
</script>

<style scoped>
.eventkeycode {
    margin: 0;
    width: 100%;
    /* width: 100vw; */
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: cornflowerblue;
}

.container {
    margin: 0;
    min-width: 800px;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.item {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 60px;
    border-radius: 5px;
    background-color: #fff;
    letter-spacing: 1px;
    font-size: 24px;
}

.item span:nth-child(1) {
    position: absolute;
    top: -50px;
    font-size: 30px;
    color: #fff;
}
</style>