// src/router/index.js o donde tengas tu router
import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '../views/inicio.vue'  // importa tu componente
import Contacto from  '../views/contacto.vue'
import Apps from '../views/apps.vue'
import Nosotros from '../views/nosotros.vue'


const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component : Contacto

  },
  {
    path: '/apps',
    name:'Apps',
    component: Apps
  },
  {
    path:'/nosotros',
    name: 'Nosotros',
    component: Nosotros
  }
  // Puedes agregar otras rutas aquí
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
