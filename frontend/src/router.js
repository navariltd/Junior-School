import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/Home.vue'),
  },
  {
    path:'/timetable',
    name:'Timetable',
    component: () => import('@/pages/Timetable.vue'),
  }
]

let router = createRouter({
  // history: createWebHistory('/frontend'),
  history: createWebHistory('/nl_school'),
  routes,
})

export default router
