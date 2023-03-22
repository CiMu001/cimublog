const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  outputDir: 'dist',
  assetsDir: 'assets',
  publicPath: './', 
  transpileDependencies: true,
  lintOnSave: false,
  chainWebpack: config => {
    config.module
      // 方法一 text-load 加载
      // .rule('md')
      // .test(/\.md$/)
      // .use('text-loader')
      // .loader('text-loader')
      // .end()

      //  方法二 加载并直接解析md文件为html
      .rule('md')
      .test(/\.md/)
      .use('html-loader')
      .loader('html-loader')
      .end()
      .use('markdown-loader')
      .loader('markdown-loader')
      .end()
  }
})
