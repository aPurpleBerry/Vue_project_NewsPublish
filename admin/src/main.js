// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router'
// import store from './store'

// createApp(App).use(store).use(router).mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入element plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//登录页面用到的库
import Particles from "vue3-particles";
// import Particles from "@tsparticles/vue3";
// import { loadSlim } from "tsparticles-slim";

const app = createApp(App)

app.use(store)
app.use(router)
app.use(ElementPlus)
app.use(Particles)

app.mount('#app')