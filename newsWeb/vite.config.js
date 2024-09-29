import { defineConfig,loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

import path from 'path'  //node提供的模块，可以获取某个文件或者文件夹的路径

export default defineConfig(({command, mode}) => {
  //获取各种环境下对应的变量
  let env = loadEnv(mode, process.cwd());

  return {
    plugins: [vue()],
    resolve: {
        alias: {
            "@": path.resolve("./src") // 相对路径别名配置，使用 @ 代替 src
        }
    },
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          additionalData: '@import "./src/styles/variable.scss";',
        },
      },
    }, // end
    server: {
      proxy: {
        [env.VITE_APP_BASE_API]: {
          target: env.VITE_SERVE, //获取数据的服务器地址设置
          changeOrigin: true, //需要代理跨域
        }
      }
    }
  }
})