import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from './components/LandingPage.vue'
import NotFoundPage from './components/NotFoundPage.vue'

const routes = [
  { path: '/', component: LandingPage },
  {path: '/:pathMatch(.*)*', name: 'not-found', component: NotFoundPage}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

createApp(App)
  .use(router)
  .mount('#app')