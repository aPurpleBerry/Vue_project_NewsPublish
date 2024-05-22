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
        //删除所有嵌套路由
        //mainbox
        router.removeRoute('mainbox')
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
  if(!router.hasRoute('mainbox')) {
    router.addRoute({
      path: '/mainbox',
      name: 'mainbox',
      component: MainBox
    })
  }
  
  routesConfig.forEach(item => {
    //如果路由中存在字段requireAdmin，就返回true
    checkPermission(item) && router.addRoute('mainbox',item)
  })

  //改变仓库中的
  store.commit("changeGetterRouter", true)
}

const checkPermission = (item) =>{
  if(item.requireAdmin) {
    return store.state.userInfo.role === 1
  } 

  return true
}

export default router
