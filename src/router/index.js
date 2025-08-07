// src/router/index.js
import { createRouter, createWebHashHistory } from 'vue-router'
import Inicio from '../views/inicio.vue'
import Contacto from '../views/contacto.vue'
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
    component: Contacto
  },
  {
    path: '/apps',
    name: 'Apps',
    component: Apps
  },
  {
    path: '/nosotros',
    name: 'Nosotros',
    component: Nosotros
  }
]

const router = createRouter({
  history: createWebHashHistory(), // 👈 Aquí cambiamos a hash mode
  routes
})

export default router
