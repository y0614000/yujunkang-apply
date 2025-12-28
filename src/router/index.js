import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Courses from '../views/Courses.vue'
import Awards from '../views/Awards.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/courses',
    name: 'Courses',
    component: Courses
  },
  {
    path: '/awards',
    name: 'Awards',
    component: Awards
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

