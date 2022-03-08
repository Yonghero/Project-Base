import { createApp } from 'vue'
import '~/style/index.scss'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import { createPinia } from 'pinia'
import App from './App.vue'
import 'virtual:windi.css'
import router from './router/index'

createApp(App).use(router).use(ElementPlus, {
  locale: zhCn,
}).use(createPinia()).mount('#app')
