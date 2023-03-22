import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import markdown from './markdown'
import todo from './todo'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    headTitle: '',
    curTop: 0,
  },
  getters: {
    curTop: state => state.curTop,
    headTitle: state => state.headTitle,
  },
  mutations: {
    setCurTop(state, val) {
      state.curTop = val;
    },
    setHeadTitle(state, val) {
      state.headTitle = val;
    },
  },
  actions: {
  },
  modules: {
    markdown, todo,
  },
  plugins: [
    createPersistedState({
      storage: window.sessionStorage,
    }),
  ]
})
