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
  // transforms: [
  //   {
  //     test: ({ path }) => {
  //       const isSVG = path.endsWith('.svg')
  //       return isSVG
  //     },
  //     transform: async ({ path, code }) => {
  //       console.log(path)
  //       console.log(code)
  //       return code
  //     },
  //   },
  // ],
  // configureServer: [test()],
  plugins: [test(3333)],
}
