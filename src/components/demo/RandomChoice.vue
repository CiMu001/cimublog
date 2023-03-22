<template>
  <div class="randomChoice">
    <div class="container">
        <div class="titleBox">
            <p>输入你想随机的事件名称，事件之间以(，)间隔</p>
            <p>按下回车开始随机选中事件</p>
        </div>
        <textarea id="textarea" v-model.trim="txt" @keyup="hanlderKeyup" placeholder="输入事件..." cows="20" cols="20"></textarea>
        <div class="lableBox">
            <span class="item" ref="items" v-for="(item, index) in lables" :key="index">{{ item }}</span>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            lables: [],
            txt: '',
        }
    },
    methods: {
        hanlderKeyup(e) {
            this.lables = this.txt.split(/，|,/).filter(i => i.trim() !== '')

            if (e.key === 'Enter' && this.txt !== '') {
                this.txt = '';

                this.randomSelect();
            }
        },
        randomSelect() {
            const times = 20

            const interval = setInterval(() => {
                const randomTag = this.pickRandom()
                randomTag.classList.add('selected')

                setTimeout(() => {
                    randomTag.classList.remove('selected')
                }, 100)
            }, 100);

            setTimeout(() => {
                clearInterval(interval)

                setTimeout(() => {
                    const randomTag = this.pickRandom()
                    randomTag.classList.add('selected')
                }, 100)

            }, times * 100)
        },
        pickRandom() {
            const { items } = this.$refs;
            // console.log(Math.floor(Math.random() * items.length));
            return items[Math.floor(Math.random() * items.length)];
        }
    }
}
</script>

<style scoped>
.randomChoice {
    position: absolute;
    top: 0;
    margin: 0;
    width: 100%;
    min-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: cornflowerblue;
}

.container {
    margin: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.titleBox {
    color: #fff;
    font-weight: 600;
    text-align: center;
}


.container textarea {
    max-width: 560px;
    width: 60vw;
    height: 90px;
    font-size: 18px;
}

.lableBox {
    margin-top: 20px;
    max-width: 560px;
    width: 60vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
}

.lableBox .item {
    margin: 10px;
    padding: 5px 10px;
    background-color: burlywood;
    color: #fff;
    border-radius: 10px;
}

.item.selected {
    background-color: rebeccapurple;
}
</style>>