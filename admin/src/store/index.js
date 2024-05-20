import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

export default createStore({
  state: {
    //是否获取到所有路由了
    isGetterRouter: false,
    // 是否折叠
    isCollapsed: true,
    userInfo: {}
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
    },
    changeUserInfo(state,value) {
      state.userInfo = {
        ...state.userInfo,
        ...value
      }
    },
    clearUserInfo(state,value) {
      state.userInfo = {}
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState({
    paths: ["isCollapsed","userInfo"] //控制是否持久化
  })]
})
