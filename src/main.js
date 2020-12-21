import { createApp } from 'vue'
import router from "./router";
import store from "./store";
import App from './App.vue'
import { useRoute, useRouter, onBeforeRouteUpdate } from 'vue-router'
import API from './api'
import './assets/index.css'

createApp(App).use({
  install: (vue) => {
    vue.config.globalProperties.api = API
    vue.config.globalProperties.route = useRoute
    vue.config.globalProperties.router = useRouter
    vue.config.globalProperties.routeUpData = onBeforeRouteUpdate
  }
}).use(router).use(store).mount('#app')
