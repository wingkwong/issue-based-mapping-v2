import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import board from '@/components/board'
import mindmap from '@/components/mindmap'
import printout from '@/components/printout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/board/:id',
      name: 'board',
      component: board
    },
    {
      path: '/mindmap/:id',
      name: 'mindmap',
      component: mindmap
    },
    {
      path: '/printout/:id',
      name: 'printout',
      component: printout
    }
  ]
})
