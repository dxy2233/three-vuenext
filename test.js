const fs = require('fs')
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = (path) => {
  const filesName = fs.readdirSync(resolve(path))
  console.log(filesName)
  return {
    transforms: [
      {
        test: ({ path }) => {
          const isMain = path.endsWith('main.js')
          return isMain
        },
        transform: async ({ code }) => {
          code =
            code +
            `console.log(8888)
          import('./icons/svg/accounts.svg')`
          return code
        },
      },
      {
        test: ({ path }) => {
          const isSVG = path.endsWith('.svg')
          return isSVG
        },
        transform: async ({ path, code }) => {
          console.log(path)
          console.log(code)
          return code
        },
      },
    ],
  }
}
