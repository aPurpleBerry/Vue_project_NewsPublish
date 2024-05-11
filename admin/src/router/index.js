import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '@/views/Login.vue'
import MainBox from '@/views/MainBox.vue'
import NotFound from '@/views/notfound/NotFound.vue';

import routesConfig from './config'
import store from '@/store'


const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/mainbox',
    name: 'mainbox',
    component: MainBox
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'Notfound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if(to.name === 'login') {
    next()
  } else {
    //如果授权（登陆过了有token）
    if(!localStorage.getItem('token')) {
      next({
        path: 'login'
      }) 
    } else {
      //第一次,还没有配置过路由
      if(!store.state.isGetterRouter){
        funcConfigRouter()
        next({
          path: to.fullPath
        })
      } else {
        next()
      }
    }
    //未授权 重定向到login
  }
})

const funcConfigRouter = ()=>{
  routesConfig.forEach(item => {
    router.addRoute('mainbox',item)
  })

  //改变仓库中的
  store.commit("changeGetterRouter", true)
}



export default router
