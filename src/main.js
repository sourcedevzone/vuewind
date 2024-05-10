import { createApp } from 'vue'
import clickOutside from './Directives/ClickOutsideDirective'
import './style.css'
import App from './App.vue'

import router from './utils/routes/router'

const app = createApp(App)

app.directive('click-outside', clickOutside)

app.use(router)

app.mount('#app')
//createApp(App).use(router).mount('#app')