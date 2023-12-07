import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from './components/LandingPage.vue'
import PageFoundTroll from './components/PageFoundTroll.vue'
import NotFoundPage from './components/NotFoundPage.vue'
import EducationPage from './components/EducationPage.vue'

const routes = [
  { path: '/', component: LandingPage },
  { path: '/education', component: EducationPage},
  { path: '/PageFound', component: PageFoundTroll,
  beforeEnter: (to, from, next) => {
    const youtubeURL = 'https://www.youtube.com/watch?v=Sagg08DrO5U';
    window.open(youtubeURL, '_blank');
    next('/');
  } },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFoundPage,
    beforeEnter: (to, from, next) => {
      next({ name: 'custom-not-found', params: { pathMatch: to.params.pathMatch } });
    }
  },
  {
    path: '/PageNotFound',
    name: 'custom-not-found',
    component: NotFoundPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

createApp(App)
  .use(router)
  .mount('#app')