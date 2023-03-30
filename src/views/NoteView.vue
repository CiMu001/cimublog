<template>
  <div class="note-page">
    <div class="categories container">
      <categorieCard v-for="item in categories" :key="item.title" :title="item.title" 
        :total="item.total" :img="item.img" :active="active === item.title" @click="title => typeChange(title)"></categorieCard>
    </div>
    <TitleBox class="mt-16px" :title="`分类 - ${active}`" noBorder></TitleBox>
    <div v-for="item in showArticles" :key="item.id">
      <div class="yearBox">{{ item.year }}<b-icon icon="emoji-wink"></b-icon></div>
      <div class="container">
        <ArticleCard v-for="chid in item.children" :key="chid.id" :data="chid"></ArticleCard>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import TitleBox from '@/components/TitleBox.vue';
import categorieCard from '@/components/categorieCard.vue';
import ArticleCard from '@/components/ArticleCard.vue';

export default {
  name: 'NoteView',
  components: {TitleBox, ArticleCard, categorieCard},
  data() {
    return {
      active: '学习笔记',
    }
  },
  computed: {
    showArticles() {
      const { articleList, active } = this;
      const showData = [];
      const afterTypeFilter = articleList.filter(item => item.type === active);
      afterTypeFilter.forEach(item => {
        const year = new Date(Date.parse(item.updateTime.replace(/-/g, "/"))).getFullYear();
        const index = showData.findIndex(data => data.year === year);
        if(index == -1) {
          showData.push({
            year,
            children: [item],
          })
        } else {
          showData[index].children.push(item)
        }
      })

      showData.sort((a,b) => b.year-a.year);
      // console.log(showData);
      return showData;
    },
    categories() {
      const { articleList } = this;
      const typeImgs = {
        '学习笔记': require('@/assets/笔记2.png'),
        '实用方法': require('@/assets/键盘.png'),
        '面试系列': require('@/assets/考试.png'),
        '快速入门': require('@/assets/快捷菜单.png'),
      }
      const types = [];
      articleList.forEach(item => {
        const typeIndex = types.findIndex(type => type.title === item.type);

        if(typeIndex === -1) {
          types.push({
            title: item.type, total: 1, img: typeImgs[item.type]
          })
        }else {
          types[typeIndex].total += 1;
        }
      })
      // console.log(types);
      return types;
    },
    ...mapGetters({
      articleList: 'articleList',
    }),
  },
  mounted() {
    this.$store.commit('setHeadTitle', this.active);
    if(!this.articleList) this.$store.dispatch('getArticleList');
  },
  methods: {
    typeChange(title) {
      this.active = title;
      this.$store.commit('setHeadTitle', title);
    }
  },
}
</script>

<style scoped>
.note-page {
  box-sizing: border-box;
  width: 80%;
  margin: 32px auto;
  padding: 16px;
  background-color: #fff;
  border: 1px solid #d0d7de;
  border-radius: 6px;
}
.yearBox {
  margin-top: 16px;
  font-size: 24px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px 10px;
  border-radius: 6px;
  background-color: #1677b3;
  color: #fff;
}
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 1%;
}

/* 工具类 */
.mt-16px {
  margin-top: 26px;
}

@media (width <= 960px) {
  .note-page {
    width: 100%;
    margin: 32px auto;
    padding: 16px;
  }
}
</style>