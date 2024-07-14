import {createRouter, createWebHashHistory} from 'vue-router'

let router = createRouter({
  //模式
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: ()=>import('@/views/home/index.vue'),
    },
    {
      path: '/news',
      component: ()=>import('@/views/news/index.vue'),
    }
  ],
  //滚动行为：页面跳转
  scrollBehavior(){
    return {
      left: 0,
      top: 0
    }
  }
})

export default router;