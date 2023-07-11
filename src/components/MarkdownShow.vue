<template>
  <div class="md-page">
    <aside
      class="index"
      tabindex="0"
      ref="aside"
      @blur="$refs.aside.classList.remove('show')"
    >
      <b-icon class="menuBtn" @click="showAside" icon="list-nested"></b-icon>
      <div class="directory"><b>目录</b></div>
      <div class="index-item-box">
        <div
          class="index-item"
          v-for="anchor in indexs"
          :style="{ padding: `10px 0 10px ${anchor.indent * 12}px` }"
          :key="anchor.id"
          @click="handleAnchorClick(anchor.id)"
        >
          <a
            :class="{ select: selectIndexId == anchor.id }"
            style="cursor: pointer"
            >{{ anchor.title }}</a
          >
        </div>
      </div>
    </aside>
    <main ref="main">
      <div class="show-md-body">
        <!-- <v-md-editor v-model="mdText"></v-md-editor> -->
        <!-- <v-md-preview :text="mdText" ref="preview"></v-md-preview> -->
        <v-md-preview-html
          :html="mdText"
          ref="preview"
          preview-class="vuepress-markdown-body"
        ></v-md-preview-html>
        <ToolBar></ToolBar>
      </div>
    </main>
  </div>
</template>

<script>
import ToolBar from "./ToolBar.vue";
import debounce from "@/utils/debounce";
// import VueMarkdownEditor, { xss } from '@kangc/v-md-editor';

export default {
  name: "MarkdownShow",
  components: { ToolBar },
  data() {
    return {
      mdText: "",
      indexs: [],
      selectIndexId: "",
      mainScrollTop: 0,
    };
  },
  async mounted() {
    // 加载MD
    const { fileName } = this.$route.meta;
    await import(`@/markDown/${fileName}.md`).then((data) => {
      this.mdText = data.default;
      // this.mdText = xss.process(VueMarkdownEditor.themeConfig.markdownParser.render(data.default))
    });

    // 获取锚点
    const anchors = this.$refs.preview.$el.querySelectorAll("h2,h3");
    const indexs = Array.from(anchors).filter(
      (title) => !!title.innerText.trim()
    );

    if (!indexs.length) {
      this.indexs = [];
      return;
    }

    const hTags = Array.from(
      new Set(indexs.map((title) => title.tagName))
    ).sort();

    this.indexs = indexs.map((el) => ({
      id: el.id,
      title: el.innerText,
      indent: hTags.indexOf(el.tagName),
      offsetTop: el.offsetTop,
    }));

    // url指定文章ID跳转处理
    const { id: queryId } = this.$route.query;
    if (queryId) {
      this.handleAnchorClick(queryId);
    }

    // 监听 MainScrollTop
    const mainScrollTopChange = () => {
      this.mainScrollTop = Math.floor(this.$refs.main.scrollTop);
      const nearbyIndex = this.indexs.find(
        (el) => Math.abs(this.mainScrollTop - el.offsetTop) <= 60
      );

      if (nearbyIndex) {
        this.selectIndexId = nearbyIndex.id;

        const indexOffsetTop = document.querySelector(
          ".index .index-item .select"
        )?.offsetParent?.offsetTop;
        const idMapTitleEL = document.querySelector(`#${nearbyIndex.id}`);
        if (nearbyIndex.offsetTop != idMapTitleEL.offsetTop) {
          // console.log({ new: idMapTitleEL.offsetTop, old: nearbyIndex.offsetTop}, 'err err err err');
          this.updateTitleOffsetTop();
        }

        this.$refs.aside.scrollTop = indexOffsetTop - 80;
      }
    };

    this.$refs.main.addEventListener(
      "scroll",
      debounce(mainScrollTopChange, 100)
    );
  },
  methods: {
    handleAnchorClick(id, top = 10) {
      const { preview, main } = this.$refs;
      const heading = preview.$el.querySelector(`#${id.toLowerCase()}`);
      if (!heading) {
        alert(`文章《${id}》不存在！`);
        return;
      }

      preview.scrollToTarget({
        target: heading,
        scrollContainer: main,
        top,
      });

      this.selectIndexId = id;
    },
    showAside() {
      const { aside } = this.$refs;
      const show = aside.className.match(/show/);
      if (show) {
        aside.classList.remove("show");
      } else {
        aside.classList.add("show");
      }
    },
    // 为什么更新那，due 我发现在展示了图片后标题offsetTop与一开始加载时不一致，不能判断正确结果！
    async updateTitleOffsetTop() {
      const anchors = this.$refs.preview.$el.querySelectorAll("h2,h3");
      const indexs = Array.from(anchors).filter(
        (title) => !!title.innerText.trim()
      );
      indexs.forEach((el, idx) => {
        this.$set(this.indexs[idx], "offsetTop", el.offsetTop);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/markdown.scss";

.md-page {
  position: relative;
  display: flex;
  flex-direction: row-reverse;
  height: calc(100vh - 60px);
  background-color: #f2f3f5;
  overflow: auto;
}

/* 侧边栏 */
.index {
  box-sizing: border-box;
  position: relative;
  top: 4px;
  right: 2%;
  flex: 0 0 240px;
  height: 80%;
  border-radius: 5px;
  overflow: auto;
  background-color: #fff;
  transition: 0.3s;
  scroll-behavior: smooth;
}
.index-item {
  cursor: pointer;
  white-space: nowrap;
  position: relative;
  margin: 0 30px;
}
.directory {
  position: sticky;
  top: 0;
  margin: 0 30px;
  padding: 8px 0 12px;
  z-index: 100;

  border-bottom: 1px solid #0005;

  font-size: 18px;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
}

.index-item-box {
  height: calc(100% - 65px);
  overflow: auto;
}
.index::-webkit-scrollbar, .index-item-box::-webkit-scrollbar  {
  width: 0;
  height: 100%;
  background-color: transparent;
}
.index:hover::-webkit-scrollbar {
  width: 0px;
}
.index a:hover,
.index a.select {
  color: #81e9be;
}
.index a.select::before {
  content: "";
  position: absolute;
  left: -10px;
  width: 4px;
  height: 24px;
  background-color: aquamarine;
}

/* 目录按钮 */
.menuBtn {
  float: right;
  display: none;
  width: 40px;
  margin: auto;
  margin-bottom: 20px;
  border: 1px solid;
  border-radius: 4px;
  padding: 4px;
  color: #078d55;
  cursor: pointer;
  font-size: 20px;
  transition: all 0.2s;
}
.menuBtn:hover {
  padding: 4px 5px;
}
.menuBtn:active {
  box-shadow: 0 0 0 6px #078d5550;
  transform: scale(0.94);
}

/* 主体 */
main {
  width: 100%;
  box-sizing: border-box;
  padding: 0 96px;
  margin: 4px 0;
  overflow: auto;
}
main::-webkit-scrollbar {
  width: 0;
  height: 0;
  background-color: transparent;
}

/* 响应式处理 */
@media (1140px >= width >= 760px) {
  main {
    width: 100%;
    margin: 4px 0;
    padding: 0 10px;
  }
  .index {
    width: 190px;
    left: 1%;
  }
}
@media (width < 760px) {
  // hide
  .index {
    position: absolute;
    width: fit-content;
    height: 40px;
    padding: 5px;
    margin: 0;
    background-color: transparent;
    box-shadow: none;
    overflow: hidden;
    transition: 0.3s;
  }

  .index .directory {
    display: none;
    text-align: left;
    margin-top: 20px;
  }

  .index .menuBtn {
    display: block;
    width: 40px;
    margin: 0;
    opacity: 0.1;
  }
  .index .menuBtn:hover {
    opacity: 1;
  }
  .index .index-item {
    display: none;
    width: 0;
    height: 0;
    overflow: hidden;
    transition: 0.6s;
  }

  //  show
  .index.show {
    width: 240px;
    flex: 0 0 240px;
    padding: 15px 30px;
    height: 95%;
    overflow-y: scroll;
    background-color: #fff;
    box-shadow: -5px 5px 10px -4px rgb(133 133 133 / 60%);
  }
  .index.show .index-item {
    display: block;
    width: auto;
    height: auto;
    overflow: visible;
  }

  .index.show .directory {
    display: block;
  }

  main {
    margin: 4px 0;
    padding: 0 10px;
  }
}
</style>