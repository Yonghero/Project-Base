import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementUI from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import Fuzzy from './components/Fuzzy/index.vue'
import App from './App.vue'
import router from './router/index'
import 'element-plus/dist/index.css'
import 'virtual:windi.css'
import './style/index.scss'

createApp(App)
  .use(router)
  .use(createPinia())
  .use(ElementUI, {
    locale: zhCn,
  })
  .component('Fuzzy', Fuzzy)
  .mount('#app')
