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
            `function createSVG(res) {
              const bodyDom = document.querySelector('body')
              const bodyFChild = bodyDom.firstElementChild
              if (bodyFChild.nodeName !== 'SVG') {
                const svgDom = document.createElement('svg')
                svgDom.setAttribute('aria-hidden', true)
                svgDom.style = 'position: absolute; width: 0; height: 0; overflow: hidden;'
                bodyDom.insertBefore(svgDom, bodyFChild)
              }
              let svgDom = bodyDom.firstElementChild
              console.log(svgDom.innerHTML)
              // const svgChild = document.createRange().createContextualFragment(res.default)
              // svgDom.appendChild(svgChild)
              svgDom.innerHTML = res.default
          }`
          code =
            code +
            `import('./icons/svg/accounts.svg').then((res)=>{createSVG(res)})`
          return code
        },
      },
      {
        test: ({ path }) => {
          const isSVG = path.endsWith('.svg')
          return isSVG
        },
        transform: async ({ path, code }) => {
          let svg = fs.readFileSync(path).toString()
          svg = svg.slice(svg.indexOf('<svg'), svg.indexOf('</svg>'))
          const id =
            'id="better-' +
            path.slice(path.lastIndexOf('\\') + 1, path.lastIndexOf('.')) +
            '"'
          const viewBoxPos = svg.indexOf('viewBox')
          const viewBox = svg.slice(
            viewBoxPos,
            svg.indexOf('"', viewBoxPos + 10) + 1,
          )
          svg =
            `<symbol ${id} ${viewBox}` +
            svg.slice(svg.indexOf('>')) +
            `</symbol>`
          code = `export default ${JSON.stringify(svg)}`
          return code
        },
      },
    ],
  }
}
