import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Login from '../views/Login.vue'
import LandingPage from '../views/LandingPage.vue'
import TelaAdministrativa from '../views/TelaAdministrativa.vue'
import ListaLaudos from '../views/ListaLaudos.vue'

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
    component: About
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/landing',
    name: 'Landing',
    component: LandingPage
  },
  {
    path: '/administrativa',
    name: 'Tela Administrativa',
    component: TelaAdministrativa
  },
	{
    path: '/ListaLaudos',
    name: 'Lista de Laudos',
    component: ListaLaudos
	}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
