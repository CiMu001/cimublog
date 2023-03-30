<template>
  <div class="categorie-card" :class="{ 'active': active }" :style="bcStyle" @click="$emit('click', title)">
    <div class="left">
      <span>{{title}}</span>
      <span class="align-center"><b-icon icon="book"></b-icon>{{total}}</span>
    </div>
    <img :src="img" width="55px" alt="icon">
  </div>
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: '标题',
    },
    total: {
      type: Number,
      default: 0,
    },
    img: {
      default: require('@/assets/笔记2.png'),
    }
  },
  data() {
    return {
      colors: [
        ['#ee9ca7', '#ffdde1'],
        ['#2193b0', '#6dd5ed'],
        ['#00b09b', '#96c93d'],
        ['#5f76bc', '#e2d6ff'],
        ['#654ea3', '#eaafc8']
      ],
      randomNum: Math.floor(Math.random() * 5),
    }
  },
  computed: {
    bcStyle() {
      const { randomNum, colors } = this;
      let bcStyle = `background: linear-gradient(to right, ${colors[randomNum][0]}, ${colors[randomNum][1]});`
      return bcStyle;
    }
  }
}
</script>

<style scoped>
.categorie-card {
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 49%;
  margin-top: 24px;
  padding: 6px 20px;
  border-radius: 6px;
  background: linear-gradient(to top, #d16ba5,#aa8fd8);
  cursor: pointer;
  transition: all 0.5s;
}
.categorie-card:hover{
  transform: scale(1.02);
}
.categorie-card .left {
  display: flex;
  gap: 16px;
  flex-direction: column;
  justify-content: flex-end;
  font-size: 24px;
  font-weight: 600;
  color: #fff;
  letter-spacing: 1px;
}
.categorie-card .left span:first-child::after {
  content: "";
  margin-top: 4px;
  display: block;
  width: 0%;
  height: 2px;
  background-color: #fff;
  transition: width .6s ease-out;
}
.categorie-card:hover .left span:first-child::after,
.categorie-card.active .left span:first-child::after {
  width: 180%;
}
.categorie-card img {
  transform: rotate(-45deg);
  transition: all .6s ease-out;
  padding: 3.2px;
  border-radius: 5px;
}
.categorie-card:hover img,
.categorie-card.active img {
  filter: brightness(.9);
  filter: drop-shadow(2px 4px 6px black);
  transform: rotate(0deg);
}
.align-center {
  display: flex;
  align-items: center;
  gap: 8px;
}

@media (width <= 960px) {
  .categorie-card:hover .left span:first-child::after,
  .categorie-card.active .left span:first-child::after {
    width: 100%;
  }

  img {
    width: 50px;
  }
}
</style>