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
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('./views/Todo.vue')
    }
  ]
})
