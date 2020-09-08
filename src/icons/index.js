// import { createApp } from 'vue'
// import SvgIcon from './svg.vue' // svg组件

// const app = createApp(SvgIcon)
// app.component('ButtonCounter', {
//   data() {
//     return {
//       count: 2,
//     }
//   },
//   template: `
//     <button @click="count++">
//       You clicked me {{ count }} times.
//     </button>`,
// })
// app.mount('html')

// const req = require.context('./svg', false, /\.svg$/)
// const requireAll = (requireContext) => requireContext.keys().map(requireContext)
// requireAll(req)

// const svgDom = document.createElement('svg')
// svgDom.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
// svgDom.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlinkg')
// svgDom.setAttribute('aria-hidden', true)
// svgDom.setAttribute('id', 'betterSvgSprite')
// svgDom.style = 'position: absolute; width: 0; height: 0; overflow: hidden;'
// const bodyDom = document.querySelector('body')
// bodyDom.appendChild(svgDom)

// import('./svg/accounts.svg').then((res) => {
//   console.log(res)
// })
// import ss from './svg/accounts.svg'
// console.log(ss)

console.log(svgFiles)
