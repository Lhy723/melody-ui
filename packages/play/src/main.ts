import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import MelodyUI from 'melody-ui'
import 'melody-ui/dist/index.css'

createApp(App).use(
    MelodyUI
).mount('#app')
