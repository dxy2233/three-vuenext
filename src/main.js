import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style/index.css'
// import './icons/index.js' // svg
// import SvgIcon from './icons/svg.vue' // svg组件

const app = createApp(App)
app.config.devtools = true
// app.component('ButtonCounter', SvgIcon)
// app.component('ButtonCounter', {
//   data() {
//     return {
//       count: 0,
//     }
//   },
//   template: `
//     <button @click="count++">
//       You clicked me {{ count }} times.
//     </button>`,
// })
app.use(router).mount('#app')
