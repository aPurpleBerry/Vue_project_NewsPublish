import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import '@/styles/index.scss'
// createApp(App).mount('#app')

const app = createApp(App) //获取实例对象
app.use(router)
app.mount('#app') // 将应用挂载
