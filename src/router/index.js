import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Login from '../views/Login.vue'
import LandingPage from '../views/LandingPage.vue'
import CadastrarMedico from '../views/CadastrarMedico.vue'
import TelaAdministrativa from '../views/TelaAdministrativa.vue'

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
    path: '/cadastrar-medico',
    name: 'Cadastrar Médico',
    component: CadastrarMedico
  },
  {
    path: '/administrativa',
    name: 'Tela Administrativa',
    component: TelaAdministrativa
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
