import { createStore } from 'vuex'

export default createStore({
  state: {
    //是否获取到所有路由了
    isGetterRouter: false
  },
  getters: {
  },
  mutations: {
    changeGetterRouter(state, value) {
      state.isGetterRouter = value
    }
  },
  actions: {
  },
  modules: {
  }
})
