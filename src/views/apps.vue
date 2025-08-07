<template>
  <section class="apps-container">
    <h1>Nuestras Soluciones</h1>

    <div class="app-card" v-for="(app, index) in apps" :key="index">
      <div class="icon" v-html="app.icon"></div>
      <div>
        <h2>{{ app.titulo }} <span v-if="app.estado" class="estado">({{ app.estado }})</span></h2>
        <p>{{ app.descripcion }}</p>
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
    titulo: 'Sistema de Vales',
    descripcion: 'Plataforma inteligente para controlar las salidas de tu almacén y/o inventario. Organiza, valida y registra cada movimiento con facilidad.',
    icon: `<svg width="40" height="40" fill="#00c6ff" viewBox="0 0 24 24"><path d="M4 4h16v16H4z" fill="none"/><path d="M5 8h14v2H5zm0 4h9v2H5z"/></svg>`
  },
  {
    titulo: 'MyInventory',
    estado: 'En proceso',
    descripcion: 'App diseñada para administrar tu almacén y generar inventarios de forma fácil. Gestiona y controla tus recursos de manera eficiente.',
    icon: `<svg width="40" height="40" fill="#00c6ff" viewBox="0 0 24 24"><path d="M3 3h18v2H3zm0 4h18v2H3zm0 4h12v2H3z"/></svg>`
  },
  {
    titulo: 'Punto de Venta',
    estado: 'En proceso',
    descripcion: 'Controla ventas, productos, clientes y reportes con una app moderna y eficiente. Ideal para tiendas físicas y negocios móviles.',
    icon: `<svg width="40" height="40" fill="#00c6ff" viewBox="0 0 24 24"><path d="M3 5h18v2H3zm0 4h18v2H3zm0 4h12v2H3z"/></svg>`
  },
  {
    titulo: 'Páginas Web',
    descripcion: 'Cuéntanos tu idea y la convertimos en una página web moderna, personalizada y optimizada. Hecha a tu medida.',
    icon: `<svg width="40" height="40" fill="#00c6ff" viewBox="0 0 24 24"><path d="M12 4a8 8 0 100 16 8 8 0 000-16zM2 12a10 10 0 1110 10A10 10 0 012 12z"/></svg>`
  },
  {
    titulo: 'Asesoría Profesional',
    descripcion: 'Te orientamos en decisiones industriales y tecnológicas. Mejora procesos, automatiza y digitaliza tu empresa con nosotros.',
    icon: `<svg width="40" height="40" fill="#00c6ff" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/></svg>`
  }
]
</script>

<style scoped>
.apps-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #222;
  text-align: center;
}

.apps-container h1 {
  font-size: 2.2rem;
  margin-bottom: 2rem;
  color: #00c6ff;
}

.app-card {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  background-color: #f3f6fa;
  border-radius: 16px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  animation: fadeUp 0.7s ease forwards;
  opacity: 0;
  transform: translateY(20px); /* importante para animación inicial */
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* para que funcione el hover */
}

.app-card:nth-child(1) { animation-delay: 0s; }
.app-card:nth-child(2) { animation-delay: 0.1s; }
.app-card:nth-child(3) { animation-delay: 0.2s; }
.app-card:nth-child(4) { animation-delay: 0.3s; }
.app-card:nth-child(5) { animation-delay: 0.4s; }

@keyframes fadeUp {
  to {
    opacity: 1;
  }
}

.icon {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
}

.app-card h2 {
  color: #0077b6;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.app-card p {
  font-size: 1rem;
  line-height: 1.6;
  font-weight: 500;
}

.estado {
  font-size: 0.9rem;
  color: #ff9800;
  font-weight: 600;
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
  margin-top: 2rem;
}

.btn-contacto:hover {
  background-color: #009acc;
}

.app-card:hover {
  transform: scale(1.03); /* no 2.03, para que no sea gigante */
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
}

@media(max-width: 768px) {
  .inicio-container{
     transform: translateY(0vh); /* súbelo 5% de la altura del viewport */
  }
}
@media(max-width: 480px) {
  .inicio-container{
     transform: translateY(0vh); /* súbelo 5% de la altura del viewport */
  }
}

</style>
