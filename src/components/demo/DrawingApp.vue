<template>
  <div class="drawing-app">
    <canvas id="canvas" width="800" height="600" ref="canvas"
        @mousedown="mousedown" @mouseup="mouseup" @mousemove="mousemove"
    ></canvas>
    <div class="toolbox">
        <div class="btn jian" @click="size -= 1">-</div>
        <div class="btn size">{{ size }}</div>
        <div class="btn jia" @click="size += 1">+</div>
        <input class="btn color" type="color" id="color"  v-model="color"/>
        <div class="btn quxiao" @click="ql">x</div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            size: 5,
            isPressed: false,
            x: undefined,
            y: undefined,
            color: 'black'
        }
    },
    methods: {
        mousedown(e) {
            this.isPressed = true;

            this.x = e.offsetX;
            this.y = e.offsetY;
        },
        mouseup(e) {
            this.isPressed = false;

            this.x = undefined;
            this.y = undefined;
        },
        mousemove(e) {
            if(this.isPressed) {
                const x2 = e.offsetX
                const y2 = e.offsetY

                this.drawCircle(x2, y2)
                this.drawLine(this.x, this.y, x2, y2)

                this.x = x2
                this.y = y2
            }
        },
        drawCircle(x, y) {
            const { canvas } = this.$refs;
            const ctx = canvas.getContext('2d');

            ctx.beginPath();
            ctx.arc(x, y, this.size, 0, Math.PI * 2)
            ctx.fillStyle = this.color
            ctx.fill()
        },
        drawLine(x1, y1, x2, y2) {
            const { canvas } = this.$refs;
            const ctx = canvas.getContext('2d');

            ctx.beginPath()
            ctx.moveTo(x1, y1)
            ctx.lineTo(x2, y2)
            ctx.strokeStyle = this.color
            ctx.lineWidth = this.size * 2
            ctx.stroke()
        },
        ql() {
            const { canvas } = this.$refs;
            const ctx = canvas.getContext('2d');

            ctx.clearRect(0,0, canvas.width, canvas.height)
        }
    }
}
</script>

<style scoped>
* {
    box-sizing: border-box;
}

.drawing-app {
    /* margin-top: 2rem; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: bisque;
}

canvas {
    border: 2px solid skyblue;
}

.toolbox {
    width: 804px;
    display: flex;
    padding: 30px;
    background-color: skyblue;
    border: 2px solid skyblue;
}

.btn {
    width: 50px;
    height: 50px;
    line-height: 36px;
    padding: 5px;
    text-align: center;
    font-size: 30px;
    border: none;
    background-color: aliceblue;
    margin: 0 10px;
    cursor: pointer;
    user-select: none;
}

.btn:last-child {
    margin-left: auto;
}
</style>>