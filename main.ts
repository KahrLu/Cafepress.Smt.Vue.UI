import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

usePinia(app)

app.mount('#app')
