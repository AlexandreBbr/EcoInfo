import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from './components/LandingPage.vue'
import PageFoundTroll from './components/PageFoundTroll.vue'
import NotFoundPage from './components/NotFoundPage.vue'
import EducationPage from './components/EducationPage.vue'
import song from './components/song.vue'
import music from './components/music.vue'

const routes = [
  { path: '/', component: LandingPage },
  { path: '/education', component: EducationPage},
  { path: '/PageFound', component: PageFoundTroll,
  beforeEnter: (to, from, next) => {
    const youtubeURL = 'https://www.youtube.com/watch?v=Sagg08DrO5U';
    window.location.href = youtubeURL;
  } },
  { path: '/hint', component: PageFoundTroll,
  beforeEnter: (to, from, next) => {
    const perduURL = 'https://perdu.com';
    window.location.href = perduURL;
  } },
  { path: '/never', component: song},
  { path: '/never/gonna', component: song},
  { path: '/never/gonna/give', component: song},
  { path: '/never/gonna/give/you', component: song},
  { path: '/never/gonna/give/you/up', component: song},
  { path: '/never/gonna/give/you/up/never', component: song},
  { path: '/never/gonna/give/you/up/never/gonna', component: song},
  { path: '/never/gonna/give/you/up/never/gonna/let', component: song},
  { path: '/never/gonna/give/you/up/never/gonna/let/you', component: song},
  { path: '/never/gonna/give/you/up/never/gonna/let/you/down', component: music},

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