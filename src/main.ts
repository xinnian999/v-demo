import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueFormCraft from 'vue-form-craft'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

const app = createApp(App)

app.use(router)
app.use(ElementPlus, {
  locale: zhCn
})
app.use(VueFormCraft)

app.mount('#app')
