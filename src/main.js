import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

export function createAPP () {
  const app = createApp(App).use(store).use(router)
  return { app, router, store }
}
