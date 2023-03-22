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
import ToolBar from '../components/ToolBar'

export default {
  components: {ToolBar},
}
</script>

<style scoped>
.container {
  /* min-width: 960px; */
  /* min-height: 100vh; */
  /* background-color: antiquewhite; */
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