import axios from 'axios'

// Add a request interceptor
//请求拦截器
axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem('token')
  config.headers.Authorization = `Bearer ${token}`
  return config;
}, function (error) {
  
  return Promise.reject(error);
});

// Add a response interceptor
//响应拦截器
axios.interceptors.response.use(function (response) {
  // console.log(response.headers);
  const {authorization} = response.headers
  authorization && localStorage.setItem('token',authorization)
  return response;
}, function (error) {
  const {status} = error.response
  if(status === 401) {
    window.location.href = '#/login'
  }
  return Promise.reject(error);
});