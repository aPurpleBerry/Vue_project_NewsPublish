const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  devServer:{
    proxy:{
      "/webapi":{
        target:"http://www.apurpleberry.cn",
        changeOrigin:true
      }
    }
  }
})

