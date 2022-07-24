const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    https: true
  },
  client: {
    webSocketURL: 'ws://0.0.0.0:6103/ws',
  }
})
