const fs = require('fs')
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = (n) => {
  console.log(n)
  const filesName = fs.readdirSync(resolve('src/icons/svg'))
  return {
    define: {
      svgFiles: filesName,
    },
    transforms: [
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
