import Vue from 'vue'
import Router from 'vue-router'
import King from '@/components/King'
import Lunbo from '@/components/Lunbo'
import Article from '@/components/Article'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/king',
      name: 'King',
      component:King
  },
  {
        path: '/lunbo',
        name: 'Lunbo',
        component:Lunbo
  },
  {
        path: '/article',
        name: 'Article',
        component:Article
  }
  ]
})
