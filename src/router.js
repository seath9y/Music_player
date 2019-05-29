import Vue from 'vue'
import Router from 'vue-router'
import Music from './views/Music.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'music',
      component: Music
    },
    {
      path: '/todo',
      name: 'todo',
      component: () => import('./views/Todo.vue')
    }, {
      path: '/other',
      name: 'other',
      component: () => import('./views/Other.vue')
    }
  ]
})
