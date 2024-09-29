//axios二次封装：请求响应拦截器
import axios from "axios";

let request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 5000
})


// 对外暴露
export default request;