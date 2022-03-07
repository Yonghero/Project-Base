import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementUI from 'element-plus'
import Fuzzy from './components/Fuzzy/index.vue'
import App from './App.vue'
import 'virtual:windi.css'
import router from './router/index'

createApp(App)
  .use(router)
  .use(createPinia())
  .use(ElementUI)
  .component('Fuzzy', Fuzzy)
  .mount('#app')
