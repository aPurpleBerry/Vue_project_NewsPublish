const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  devServer:{
    proxy:{
      "/webapi":{
        target:'http://localhost:3000',
        // target:"http://www.apurpleberry.cn",
        changeOrigin:true
      }
    }
  }
})

