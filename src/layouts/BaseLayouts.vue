<template>
  <div class="container">
    <div class="backgroup-container" ref="container"></div>
    <VHeader />
    <main>
      <router-view />
      <div
        v-if="!$route.path.match(/(note||uselessTool)\//)"
        class="leave-blank"
      ></div>
    </main>
    <ToolBar></ToolBar>
  </div>
</template>

<script>
import VHeader from "@/components/VHeader.vue";
import ToolBar from "@/components/ToolBar";
import confetti from "canvas-confetti";
import * as THREE from "three";
import rings from "vanta/src/vanta.rings";
import fog from "vanta/src/vanta.fog";
import net from "vanta/src/vanta.net";
import clouds from "vanta/src/vanta.clouds";
import halo from "vanta/src/vanta.halo";
import waves from "vanta/src/vanta.waves";
import { randomInRange } from "@/utils/myFun";



export default {
  components: { ToolBar, VHeader },
  data() {
    return {
      vantaMap: [rings, fog, net, clouds, halo, waves],
    }
  },
  async mounted() {
    // 点击喷发彩屑
    document.addEventListener("click", (e) => {
      confetti({
        angle: randomInRange(55, 125),
        spread: randomInRange(50, 70),
        ticks: 60,
        particleCount: randomInRange(10, 20),
        origin: {
          x: e.clientX / innerWidth,
          y: e.clientY / innerHeight,
        },
      });
    });

    const randomNum = Math.round(randomInRange(0, this.vantaMap.length - 1));
    const vantaGB = this.vantaMap[randomNum];
    // 背景加载
    this.vantaEffect = vantaGB({
      el: this.$refs.container,
      THREE: THREE,
      // color: 0x72334,
    });
  },
  beforeDestroy() {
    if (this.vantaEffect) {
      this.vantaEffect.destroy();
    }
  },
};
</script>

<style scoped>
body {
  background: #a2f9b2;
}
.backgroup-container {
  position: fixed;
  width: 100vw;
  height: 100vh;
}
.container {
  position: static;
  background: url("~@/assets/img/blob-scene-haikei.svg");
  background-size: 100%;
  min-height: 100vh;
}
main {
  position: relative;
  min-height: calc(100vh - 65px);
  overflow-x: hidden;
}
.leave-blank {
  height: 96px;
}
</style>
