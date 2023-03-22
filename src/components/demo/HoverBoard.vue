<template>
  <div class="HoverBoard">
    <div class="size">
      行: <input type="number" id="row" v-model.number="row" min="10" max="40"> 列: <input type="number" id="col" v-model.number="col" min="10" max="40">
    </div>
    <div class="container" :style="{width: `${20 * col}px`}" id="container">
        <div class="item" v-for="i in total" :key="i" @mouseenter="setColor" @mouseleave="removeColor"></div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            row: 25,
            col: 20,
            colors: ['#6896b7', '#db8ea6', '#7b9361', '#b85b6c', '#dd8a94'],
            baseColor: '#1d1d1d'
        }
    },
    computed: {
        total() {
            return this.row * this.col;
        }
    },
    methods: {
        setColor(e) {
            const color = this.randomColor()
            e.target.style.background = color;
            e.target.style.boxShadow = `0 0 10px ${color}`;
        },
        removeColor(e) {
            e.target.style.background = this.baseColor
            e.target.style.boxShadow = `0 0 2px ${this.baseColor}`
        },
        randomColor() {
            return this.colors[Math.floor(Math.random() * this.colors.length)]
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
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  background-color: black;
} */

.HoverBoard {
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 20px;
  padding: 64px;
  background-color: black;
}

.container {
  width: 400px;
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}

.item {
  width: 16px;
  height: 16px;
  background-color: rgb(29,29,29);
  box-shadow: 0px 0px 2px rgb(0, 0, 0);
  transition: 2s ease;
}

.item:hover{
  transition-duration: 0s;
}

.size {
  margin-top: 50px;
  color: aliceblue;
  font-size: 30px;
}

.size input {
  background-color: transparent;
  color: inherit;
  font-size: inherit;
  border: none;
  width: 80px;
}
</style>