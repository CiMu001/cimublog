<template>
  <div class="useless">
    <div class="tool-home" v-if="$route.path === '/uselessTool'">
      <!-- <div class="img"></div> -->
      <img class="img" src="https://picsum.photos/seed/picsum/960/300" alt="" />
      <div class="container">
        <ToolCard v-for="(tool, index) in tools" :key="index" :tool="tool" @click.native="$router.push(tool.url)"></ToolCard>
      </div>
    </div>
    <div class="toolshow" v-else>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tools: [
        { title: '待办事项', icon: 'check2-square', info: '简单的todos', url: 'uselessTool/todoList' },
        { title: '事件随机选择器', icon: 'box', info: '电子老虎机，解决选择困难症', url: 'uselessTool/randomChoice' },
        { title: '键盘按键码提示器', icon: 'code', info: '按下键盘按键显示其代码信息', url: 'uselessTool/eventkeycode' },
        { title: '字符生成器', icon: 'spellcheck', info: '可以指定字符长度、类型的字符生成器', url: 'uselessTool/stringGenerator' },
        { title: '便签', icon: 'pin-angle', info: '简单快速记录一些关键字或想法', url: 'uselessTool/noteapp' },
        { title: '弹幕模拟器', icon: 'bar-chart-steps', info: '莓永+1，模拟视频网站弹幕效果', url: 'uselessTool/bulletChat' },
        { title: '倒计时器', icon: 'alarm', info: '莓永+1， 生动计时器', url: 'uselessTool/countdown' },
        { title: '简易绘画本', icon: 'palette', info: '莓永+1， 很low的绘画本', url: 'uselessTool/drawing' },
        { title: '时钟', icon: 'clock', info: '莓永+1， 实现一个小时钟', url: 'uselessTool/clock' },
        { title: '饮水', icon: 'cup-straw', info: '莓永+1， 喝水记录器', url: 'uselessTool/drink' },
        { title: '触摸板', icon: 'mouse3', info: '莓永+1，彩色尾气的触摸板', url: 'uselessTool/hoverBoard' },
      ],
    }
  }
}
</script>

<style scoped>
.useless {
  display: flex;
  justify-content: center;
  align-items: center;
}
.img {
  width: 100%;
  background-color: #425AEF;
  margin-bottom: 32px;
  height: 300px;
  border-radius: 12px;
  overflow: hidden;
}
.tool-home, .toolshow {
  width: 80%;
  margin: 32px auto;
  padding: 16px;
  background-color: #fff;
  border: 1px solid #d0d7de;
  border-radius: 6px;
}
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}

.toolshow {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  padding: 16px;
  overflow-x: hidden;
}
</style>