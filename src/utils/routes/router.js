// https://router.vuejs.org/guide/essentials/named-routes.html

import { createMemoryHistory, createRouter } from 'vue-router'

import Dashboard from '../../Pages/Dashboard.vue'
import Button from '../../Pages/Elements/Button.vue'

const routes = [
  { path: '/', component: Dashboard, name: 'dashboard' },
  { path:'/elements/buttons', component: Button, name: 'button'}
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router