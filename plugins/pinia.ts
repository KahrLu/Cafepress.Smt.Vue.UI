import { App } from 'vue'
import { createPersistedState } from 'pinia-plugin-persistedstate'
import { registerStore } from '../stores'

export function usePinia(vueApp: App<Element>) {
  const pinia = createPinia()
  vueApp.use(pinia)
  pinia.use(
    createPersistedState({
      storage: localStorage,
      beforeRestore: () => {},
      afterRestore: () => {},
      serializer: {
        serialize: JSON.stringify,
        deserialize: JSON.parse,
      },
    })
  )
  registerStore()
}
