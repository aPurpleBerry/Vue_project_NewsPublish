import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import path from 'path'  //node提供的模块，可以获取某个文件或者文件夹的路径
// export default defineConfig({
//     plugins: [vue()],
//     resolve: {
//         alias: {
//             "@": path.resolve("./src") // 相对路径别名配置，使用 @ 代替 src
//         }
//     }
// })


export default defineConfig(({command}) => {
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
    } // end
  }
})