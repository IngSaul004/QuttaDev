<template>
  <section class="apps-container">
    <h1>Nuestras Soluciones</h1>

    <div class="cards-grid">
      <div class="app-card" v-for="(app, index) in apps" :key="index">
        <div class="icon" v-html="app.icon"></div>
        <div>
          <h2>{{ app.titulo }} <span v-if="app.estado" class="estado">({{ app.estado }})</span></h2>
          <p>{{ app.descripcion }}</p>
        </div>
      </div>
    </div>

    <button class="btn-contacto" @click="irContacto">¡Quiero más información!</button>
  </section>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

function irContacto() {
  router.push('/contacto')
}

const apps = [
  {
    titulo: 'Sistema de KanBan',
    descripcion: 'Plataforma inteligente para organizar y controlar salidas de inventario. Permite gestionar, validar y registrar cada movimiento de forma rápida y eficiente, mejorando la productividad de tu negocio.',
    icon: `<svg width="40" height="40" fill="#00c6ff" viewBox="0 0 24 24"><path d="M4 4h16v16H4z" fill="none"/><path d="M5 8h14v2H5zm0 4h9v2H5z"/></svg>`
  },
  {
    titulo: 'MyInventory',
    estado: 'En proceso',
    descripcion: 'App diseñada para simplificar la gestión de tu almacén y crear inventarios precisos. Organiza tus productos y recursos de manera eficiente, ahorrando tiempo y reduciendo errores.',
    icon: `<svg width="40" height="40" fill="#00c6ff" viewBox="0 0 24 24"><path d="M3 3h18v2H3zm0 4h18v2H3zm0 4h12v2H3z"/></svg>`
  },
  {
    titulo: 'Punto de Venta',
    estado: 'En proceso',
    descripcion: 'Solución moderna para controlar ventas, productos, clientes y reportes. Ideal para tiendas físicas y negocios móviles que buscan agilizar operaciones y mejorar la experiencia de sus clientes.',
    icon: `<svg width="40" height="40" fill="#00c6ff" viewBox="0 0 24 24"><path d="M4 4h16v16H4z"/><path d="M9 8h6v8H9z" fill="#fff"/></svg>`
  },
  {
    titulo: 'Páginas Web',
    descripcion: 'Transformamos tus ideas en sitios web modernos, personalizados y optimizados. Cada proyecto se diseña a medida para ofrecer una experiencia única y funcional a tus usuarios.',
    icon: `<svg width="40" height="40" fill="#00c6ff" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10
    10-4.48 10-10S17.52 2 12 2zm0 17l-5-5h3V9h4v5h3l-5 5z"/></svg>`
  },
  {
    titulo: 'Invitaciones Digitales',
    descripcion: 'Creamos invitaciones digitales únicas y personalizadas para cualquier evento. Diseños atractivos y fáciles de compartir, que sorprenden y generan emoción en tus invitados.',
    icon: `<svg width="40" height="40" fill="#00c6ff" viewBox="0 0 24 24"><path d="M20 4H4v16h16V4zm-2 14H6V6h12v12z"/></svg>`
  },
  {
    titulo: 'Asesoría Profesional',
    descripcion: 'Te guiamos en decisiones tecnológicas e industriales, ayudando a mejorar procesos, automatizar tareas y digitalizar tu negocio para hacerlo más competitivo y eficiente.',
    icon: `<svg width="40" height="40" fill="#00c6ff" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/></svg>`
  },
  {
    titulo: 'Hardware',
    descripcion: 'Suministramos equipo y componentes tecnológicos de alta calidad, diseñados para optimizar tus proyectos y sistemas con confiabilidad y desempeño garantizado.',
    icon: `<svg width="40" height="40" fill="#00c6ff" viewBox="0 0 24 24">
      <rect x="4" y="4" width="16" height="16" rx="2" ry="2" stroke="#00c6ff" stroke-width="2" fill="none"/>
      <circle cx="12" cy="12" r="3" stroke="#00c6ff" stroke-width="2" fill="none"/>
      <line x1="12" y1="5" x2="12" y2="9" stroke="#00c6ff" stroke-width="2"/>
      <line x1="12" y1="15" x2="12" y2="19" stroke="#00c6ff" stroke-width="2"/>
      <line x1="5" y1="12" x2="9" y2="12" stroke="#00c6ff" stroke-width="2"/>
      <line x1="15" y1="12" x2="19" y2="12" stroke="#00c6ff" stroke-width="2"/>
    </svg>`
  },
]


</script>

<style scoped>
.apps-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #222;
  text-align: center;
}

.apps-container h1 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #00c6ff;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.app-card {
  background-color: #f3f6fa;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  animation: fadeUp 0.7s ease forwards;
  opacity: 0;
  transform: translateY(20px);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.app-card:hover {
  transform: scale(1.03);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
}

.app-card h2 {
  color: #0077b6;
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  text-align: left;
}

.app-card p {
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 500;
  text-align: left;
}

.estado {
  font-size: 0.9rem;
  color: #ff9800;
  font-weight: 600;
}

.icon {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
}

.btn-contacto {
  background-color: #00c6ff;
  color: white;
  border: none;
  padding: 0.75rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 30px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-contacto:hover {
  background-color: #009acc;
}

@keyframes fadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
