import { createRouter, createWebHistory } from "vue-router"
import routes from './routes'


console.log(routes)
const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = (to.meta && to.meta.title) || 'vue3'
  next()
})

router.afterEach(() => {
  window.scrollTo(0, 0)
})

export default router
