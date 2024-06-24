const path = require('path')

const resolve = (dir) => path.resolve(__dirname, dir)

module.exports = {
  webpack: {
    mode: 'development',
    devtool: 'source-map',
    //@路径配置
    alias: {
      '@': resolve('src'),
    },
    //文件后缀省略
    resolve: {
      extensions: ['.js', '.tsx'],
    },
  },
}
