import { getMDList, getArticles } from '@/api'
import router from '@/router'

// markdown 仓库
const state = {
  markdownList: [],
  articleList: [],
}

const getters = {
  markdownList: state => {
    for(let item of state.markdownList) {
      router.addRoute('baseLayouts', {
        path: item.path,
        name: item.title,
        component: () => import('../components/MarkdownShow'),
        meta: { ...item }
      })
    }
    return state.markdownList;
  },
  articleList: state => {
    return state.articleList;
  },
}

const actions = {
  async getMarkdownList({commit}) {
      const res = await getMDList();

      const data = res.data;
      commit('setMarkdownList', { data });

      return data;
  },
  async getArticleList({commit}) {
    const res = await getArticles()

    if(res.code===200) {
        // 只取1-10个
        const data = res.data;
        commit('setArticleList', { data });
    }
},
}

const mutations = {
  setMarkdownList(state, { data }) {
      state.markdownList = data
  },
  setArticleList(state, { data }) {
    state.articleList = data
  },
}

export default {
  state, actions, mutations, getters
}