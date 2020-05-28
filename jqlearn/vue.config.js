const path = require('path')
const webpack = require('webpack')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  configureWebpack: {
    resolve:{
      extensions: ['.js', '.vue', '.json', ".css"],
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        '@': resolve('src'),
        "core": require("path").resolve(__dirname, "core"),
        "src": require("path").resolve(__dirname, "src")
      },
    }
  },
  transpileDependencies: [],
  devServer: {
    // 这里写你调用接口的基础路径，来解决跨域，如果设置了代理，那你本地开发环境的axios的url要写为 '' ，即空字符串
    proxy: {
      '/apis': {
        target: 'https://dataapi.joinquant.com',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/apis': ''
        }
      }
    }
  }
}
