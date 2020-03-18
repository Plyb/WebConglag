import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Phonology from "../views/Phonology.vue"
import Dictionary from "../views/Dictionary.vue"
import Translator from "../views/Translator.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }, 
  {
    path: '/phonology',
    name: 'Phonology',
    component: Phonology
  }, 
  {
    path: '/Dictionary',
    name: 'Dictionary',
    component: Dictionary
  }, 
  {
    path: '/Translator',
    name: 'Translator',
    component: Translator
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
