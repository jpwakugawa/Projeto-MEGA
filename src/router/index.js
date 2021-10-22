import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../views/About.vue'
import Login from '../views/Login.vue'
import LandingPage from '../views/LandingPage.vue'
import TelaAdministrativa from '../views/TelaAdministrativa.vue'
import TelaListaPacientes from '../views/TelaListaPacientes.vue'
import ListaLaudos from '../views/ListaLaudos.vue'
import UploadLaudos from '../views/UploadLaudos.vue'
import UploadLaudosAdmin from '../views/UploadLaudosAdmin.vue'
import Logout from '../views/Logout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: LandingPage
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
    path: '/lista-pacientes',
    name: 'Lista Pacientes',
    component: TelaListaPacientes
  },
	{
    path: '/lista-laudos',
    name: 'Lista de Laudos',
    component: ListaLaudos
	},
  {
    path: '/upload-laudos/:id',
    name: 'Upload Laudos',
    component: UploadLaudos
  },
  {
    path: '/logout',
    name: 'Logout',
    component: Logout
  },
  {
    path: '/upload-laudos-admin/:id',
    name: 'Upload Laudos Admin',
    component: UploadLaudosAdmin
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
