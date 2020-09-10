const path = require('path')
const test = require('./test.js')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  alias: {
    vue: 'vue/dist/vue.esm-bundler.js',
    '/@views/': resolve('src/views'),
    '/@img/': resolve('src/assets/img'),
  },
  plugins: [test('src/icons/svg')],
}
