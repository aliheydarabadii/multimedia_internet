import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/introduction',
      name: 'introduction',
      component: () => import('../views/IntroductionView.vue')
    },
    {
      path: '/playback-applications',
      name: 'playback-applications',
      component: () => import('../views/PlaybackApplicationsView.vue')
    },
    {
      path: '/sla',
      name: 'sla',
      component: () => import('../views/SLAView.vue')
    },
    {
      path: '/media-types',
      name: 'media-types',
      component: () => import('../views/MediaTypesView.vue')
    },
    {
      path: '/tech',
      name: 'tech',
      component: () => import('../views/TechnologyView.vue')
    },
    {
      path: '/development',
      name: 'development',
      component: () => import('../views/DevelopmentView.vue')
    },
    {
      path: '/notes',
      name: 'notes',
      component: () => import('../views/NotesView.vue')
    }
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
    return { top: 0 }
  }
})

export default router 