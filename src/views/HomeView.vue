<template>
  <div class="home">
    <div class="infoCard">
      <div class="userbox">
        <div class="avatar">
          <user-avatar></user-avatar>
        </div>
        <div class="info">
          <span class="nikiname">CiMu</span>
          <span class="githubname">CiMu001</span>
          <span class="introduce">你很厉害吧，我可以像你一样吗？</span>
        </div>
      </div>
      <div class="other">
        <IncrementCouter id="couter"></IncrementCouter>
        <GoodCheapFast class="mt-2rem" id="g-c-f"></GoodCheapFast>
      </div>
    </div>
    <main>
      <!-- 待填坑 -->
      <TitleBox title="待填坑" class="mt-2rem"></TitleBox>
      <TodoList class="mt-2rem" todoType="kengTodo"></TodoList>

      <!-- 笔记集 -->
      <TitleBox title="笔记集"></TitleBox>
      <div class="nodebox">
        <v-card v-for="item in markdownList" :key="item.id" :title="item.title" 
          :introduce="item.introduce" :language="item.language" :path='item.path'>
        </v-card>
      </div>

      <!-- 技能点 -->
      <TitleBox title="技能点" class="mt-2rem"></TitleBox>
      <VSkills></VSkills>

      <!--  快捷工具栏  -->
      <TitleBox title="快捷工具" class="mt-2rem"></TitleBox>
      <div class="toolbox">
        <ToolCard v-for="(tool, index) in tools" :key="index" :tool="tool" @click.native="$router.push(tool.url)"></ToolCard>
      </div>

      <!-- 留白 -->
      <div class="leave-blank"></div>
    </main>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import UserAvatar from '../components/UserAvatar.vue'
import IncrementCouter from '@/components/demo/IncrementCouter.vue';
import VCard from '../components/VCard.vue'
import TitleBox from '@/components/TitleBox.vue';
import TodoList from '@/components/demo/TodoList.vue';
import GoodCheapFast from '@/components/demo/GoodCheapFast.vue';
import VProgress from '@/components/VProgress.vue';
import VSkills from '@/components/VSkills.vue';


export default {
  name: 'HomeView',
  components: {UserAvatar, VCard, IncrementCouter, TitleBox, TodoList, GoodCheapFast, VProgress, VSkills},
  data() {
    return {
      tools: [
        { title: '事件随机选择器', icon: 'box', info: '电子老虎机，解决选择困难症', url: 'uselessTool/randomChoice' },
        { title: '键盘按键码提示器', icon: 'code', info: '按下键盘按键显示其代码信息', url: 'uselessTool/eventkeycode' },
        { title: '字符生成器', icon: 'spellcheck', info: '可以指定字符长度、类型的字符生成器', url: 'uselessTool/stringGenerator' },
        { title: '便签', icon: 'pin-angle', info: '简单快速记录一些关键字或想法', url: 'uselessTool/noteapp' },
        { title: '简易绘画本', icon: 'palette', info: '莓永+1， 很low的绘画本', url: 'uselessTool/drawing' },
        { title: '时钟', icon: 'clock', info: '莓永+1， 实现一个小时钟', url: 'uselessTool/clock' },
        // { title: '触摸板', icon: 'mouse3', info: '莓永+1，彩色尾气的触摸板', url: 'uselessTool/hoverBoard' },
      ],
    }
  },
  mounted() {
    // if(!this.markdownList.length) this.$store.dispatch('getMarkdownList', this.$router);
    if(!this.articleList.length) {this.$store.dispatch('getArticleList')};
  },
  computed: {
    ...mapGetters({
      markdownList: 'markdownList',
      articleList: 'articleList',
    }),
  }
}
</script>

<style lang="scss" scoped>
.home {
  display: flex;
}
.infoCard {
  position: absolute;
  left: 32px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 32px;
  text-align: center;
  z-index: 0;
}
.userbox, .userbox .info {
  display:  flex;
  flex-direction: column;
  align-items: center;
}
.nikiname {
  margin-top: 32px;
  font-size: 24px;
  line-height: 1.25;
  font-weight: 500;
}
.githubname {
  font-size: 20px;
  line-height: 1.25;
  color: #57606a;
  font-weight: 300;
}
.introduce {
  font-size: 14px;
  line-height: 2.5;
}
main {
  margin: 16px 0;
  flex-grow: 1;
}
.nodebox {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}
.mt-2rem {
  margin-top: 32px;
}

.toolbox {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}

.leave-blank{
  height: 160px;
}

.hoverborad-box {
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  background-color: black;
}

.avatar {
  display: flex;
  justify-content: center;
  width: 60px;
  height: 60px;
}

@media (width >= 1240px) {
  .home {
    width: 56%;
    margin: 16px auto;
    gap: 32px;
  }
  .infoCard {
    width: 22%;
    margin-top: 96px;
    overflow: hidden;
    transition: .3s;
  }
  main {
    margin-left: 64px;
  }
  .avatar {
    width: 60%;
    height: 60%;
  }
}
@media (1240px > width >= 960px) {
  .home {
    width: 66%;
    gap: 64px;
    margin: 0 auto;
  }
  .infoCard {
    width: 0%;
    margin-top: 96px;
    overflow: hidden;
    transition: all .3;
  }
  .avatar {
    width: 200px;
    height: 200px;
  }
  #couter {
    /* flex-direction: column; */
    flex-wrap: wrap;
    height: auto; 
    margin-top: 16px;
  }
}

@media (560px <= width < 960px) {
  .home {
    flex-direction: column;
  }
  .infoCard {
    position: static;
  }
  .avatar {
    width: 12vw;
    height: 12vw;
  }
  #g-c-f { display: none; }
  #couter { height: 130px; }
}
@media (width < 560px) {
  .home {
    width: 100%;
    flex-direction: column;
  }
  .infoCard {
    position: static;
  }
  .avatar {
    width: 20vw;
    height: 20vw;
  }
  #couter {display: none;}
  #g-c-f {display: none;}
}
</style>
