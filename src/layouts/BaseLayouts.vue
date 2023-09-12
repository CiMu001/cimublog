<template>
  <div class="container">
    <v-header></v-header>
    <main>
      <router-view/>
      <div v-if="!($route.path.match(/(note||uselessTool)\//))" class="leave-blank"></div>
    </main>
    <ToolBar></ToolBar>
  </div>
</template>

<script>
import ToolBar from '../components/ToolBar';
import confetti from 'canvas-confetti';
import '@/utils/snowflake';

export default {
  components: {ToolBar},
  mounted() {
    document.addEventListener('click',(e) => {
      confetti({
        particleCount: 20,
        spread: 20,
        angle: Math.floor(Math.random() * 180),
        origin: {
            x: e.clientX / innerWidth,
            y: e.clientY / innerHeight
          }
      });
    })
  }
}
</script>

<style scoped>
body {
  background: #a2f9b2;
}
.container {
  /* min-width: 960px; */
  /* min-height: 100vh; */
  /* background-color: antiquewhite; */
  background: url('~@/assets/img/blob-scene-haikei.svg');
  /* background-repeat: no-repeat; */
  background-size: 100%;
  min-height: 100vh;
}
main {
  position: relative;
  padding: 0 16px;
  /* margin-top: 65px; */
  min-height: calc(100vh - 65px);
  overflow-x: hidden;
}
.leave-blank {
  height: 96px;
}
</style>