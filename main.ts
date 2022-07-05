import { createApp } from 'vue'
import App from './App.vue'
import { createPinia  } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { registerStore } from './stores'

const pinia = createPinia()
createApp(App).use(pinia).mount('#app')
pinia.use(piniaPluginPersistedstate)
registerStore()


