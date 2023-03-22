import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
import { routes } from './routes';

Vue.use(VueRouter)

const router = new VueRouter({
  // mode: 'history',
  routes,
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { y: 0 };
  }
})

// 前置全局守卫
router.beforeEach((to, from, next) => {
  if (!store.state.markdown.markdownList.length) {
    store.dispatch('getMarkdownList')
  }

  next();
})

const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
export default router
