<template>
  <header v-if="!activeRouter.match(/about/)" :class="{ fixed: curTop > 40 }" :style="{position: notePage ? 'relative' : ''}">
    <div class="title" :class="{ noteMode: activeRouter.match(/note\//) }">
        <b-icon icon="battery-charging"></b-icon>
        <span v-if="title">{{ title }}</span>
        <!-- <span>{{ activeRouter }}</span> -->
        <span v-if="activeRouter.match(/note/)">{{ headTitle }}</span>
        <span v-if="curTop > 0">{{ curTop }}</span>
    </div>
    <ul class="navbox">
      <li
        v-for="item in navList"
        :class="{ avitve: liActive === item.url }"
        :key="item.lable"
        @click="jumpPage(item.url)"
      >
        <b-icon :icon="item.icon"></b-icon>
        <span class="lable">{{ item.lable }}</span>
      </li>
    </ul>
  </header>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "VHeader",
  props: ["title"],
  data() {
    return {
      notePage: false,
      navList: [
        {
          lable: "首页",
          icon: "egg-fried",
          url: "/",
        },
        {
          lable: "芝士",
          icon: "book",
          url: "/note",
        },
        {
          lable: "莓用小工具",
          icon: "bug",
          url: "/uselessTool",
        },
        {
          lable: "关于我",
          icon: "brush",
          url: "/about",
        },
      ],
    };
  },
  methods: {
    jumpPage(url) {
      this.$router.push(url);
    },
  },
  computed: {
    liActive() {
      const { navList, activeRouter } = this;
      let active = "";
      navList.forEach((item) => {
        if (activeRouter.includes(item.url)) {
          active = item.url;
        }
      });
      return active;
    },
    activeRouter() {
      return this.$route.path;
    },
    ...mapGetters({
      curTop: "curTop",
      headTitle: "headTitle",
    }),
  },
  watch: {
    $route(route) {
      console.log(route, !!route.meta.fileName, 'route');
      if(!!route.meta.fileName) {
        this.notePage = true;
      } else {
        this.notePage = false;
      }
    }
  }
};
</script>
<style scoped>
header {
  /* position: fixed; */
  top: 0;
  left: 0;
  right: 0;
  box-sizing: border-box;
  width: 100%;
  height: 60px;
  padding: 0 16px;
  border-bottom: 1px;
  box-shadow: 0 5px 6px -5px rgb(133 133 133 / 60%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff9;
  z-index: 100;
  transition: position 1s;
}
header.fixed {
  position: sticky;
}
.navbox {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;
  cursor: pointer;
  list-style: none;
}
.navbox li {
  position: relative;
  font-size: 17px;
  font-weight: 500;
  color: darkmagenta;
  padding: 2px;
  display: flex;
  align-items: center;
}
.navbox li::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 22%;
  display: inline-block;
  background-color: #42b98380;
  transition: all 0.3s;
}
.navbox li.avitve::before {
  background-color: #8b008b80;
}
.navbox li:hover::before {
  height: 90%;
}
.title {
  display: flex;
  align-items: center;
  gap: 32px;
  font-size: 22px;
  color: darkmagenta;
  transition: all 1s;
}
.title svg {
  color: #7952b3;
  width: 60px;
  height: 60px;
}
.navbox svg {
  color: #7952b3;
  width: 18px;
  height: 18px;
}
@media (width >= 960px) {
  header {
    padding: 0 10%;
  }
  .title.noteMode {
    margin-left: -10%;
  }
}
@media (width < 670px) {
  .navbox .lable {
    display: none;
  }
  .title span {
    display: none;
  }
  header .title svg {
    width: 50px;
    height: 50px;
  }
  .navbox li svg {
    width: 28px;
    height: 28px;
  }
}
</style>
