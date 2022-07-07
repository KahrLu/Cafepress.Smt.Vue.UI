import { createApp } from 'vue'
import App from './app.vue'
import { createRouter, createWebHistory } from 'vue-router'
import generatedRoutes from 'virtual:generated-pages'
import { setupLayouts } from 'virtual:generated-layouts'

const router = createRouter({
  history: createWebHistory(),
  routes: setupLayouts(generatedRoutes),
})

const app = createApp(App)

app.use(router)
usePinia(app)

app.mount('#app')
