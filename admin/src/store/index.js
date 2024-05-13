import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

export default createStore({
  state: {
    //是否获取到所有路由了
    isGetterRouter: false,
    // 是否折叠
    isCollapsed: true
  },
  getters: {
  },
  mutations: {
    changeGetterRouter(state, value) {
      state.isGetterRouter = value
    },
    //控制侧边栏展开
    changeCollapsed(state) {
      state.isCollapsed = !state.isCollapsed 
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState({
    paths: ["isCollapsed"] //控制是否持久化
  })]
})
