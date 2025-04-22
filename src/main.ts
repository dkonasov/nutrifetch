import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { foodLoaderPlugin } from './store'
import piniaPluginLogger from 'pinia-plugin-logger'

const pinia = createPinia()

pinia.use(foodLoaderPlugin)

const logger = piniaPluginLogger({
  activate: true,
  expanded: true,
  store: true,
  timestamp: true,
  errors: true,
})

pinia.use(logger)

const app = createApp(App)

app.use(pinia)

app.mount('#app')
