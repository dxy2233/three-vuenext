import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style/index.css'
import SvgIcon from './icons/svg.vue' // svg组件

const app = createApp(App)

app.config.devtools = true

app.component('SvgIcon', SvgIcon)
app.use(router).mount('#app')
