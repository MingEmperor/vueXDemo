import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Parent from '@/components/Parent'
import Child from '@/components/Child'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Parent',
      name: 'Parent',
      component: Parent
    },
    {
      path: '/Child',
      name: 'Child',
      component: Child
    }
  ]
})
