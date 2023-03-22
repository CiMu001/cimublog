import BaseLayouts from '../layouts/BaseLayouts'
import HomeView from '../views/HomeView.vue'
import NoteView from '../views/NoteView.vue'
import AboutView from '../views/AboutView.vue'
import UselessTool from '../views/UselessTool.vue'
// import { markdownRoute } from './markdown'
import toolRoute from './tool'

export const routes = [
    {
      name: 'baseLayouts',
      path: '/',
      component: BaseLayouts,
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView
        },{
          path: '/about',
          name: 'about',
          component: AboutView
        },{
          path: '/note',
          name: 'note',
          component: NoteView,
        },{
          path: '/uselessTool',
          name: 'uselessTool',
          component: UselessTool,
          children: [
            ...toolRoute
          ],
        }
      ]
    },
    // 404
    {
        path: '*',
        component: () => import('@/views/exception/404/index.vue')
    }
]