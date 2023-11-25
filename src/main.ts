import './assets/base.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import ViewerPlugin from '@/ViewerPlugin'

// const app = createApp(App)
const app = createApp(App);
app.use(ViewerPlugin, { img: "https://picsum.photos/1000/1000" });
app.use(ViewerPlugin);
app.use(createPinia())
app.mount('#app')
