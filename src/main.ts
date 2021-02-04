import { createApp } from 'vue'
import router from "./router"
import store from "./store"
import App from './App.vue'
import API from './api'
import './assets/index.css'

createApp(App).use({
  install: (vue) => {
    vue.config.globalProperties.api = API
  }
}).use(router).use(store).mount('#app')
