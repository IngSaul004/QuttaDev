<template>
  <section class="nosotros-container">
    <h1>Conoce a Nuestro Equipo</h1>

    <div class="miembros">
      <div class="miembro-card" v-for="(icono, nombre) in equipo" :key="nombre">
        <div class="icono" v-html="icono.icono"></div>
        <h2>{{ icono.nombre }}</h2>
        <h3>{{ icono.rol }}</h3>
        <p>{{ icono.descripcion }}</p>
      </div>
    </div>

    <div class="mensaje-final">
      <p>
        En QuttaDev contamos con un equipo altamente capacitado en cada una de nuestras áreas. Nuestro compromiso es ayudarte a modernizar y potenciar tu negocio con soluciones a tu medida, ajustadas a tus necesidades y recursos. Somos un equipo confiable, profesional y preparado para convertirnos en tu mejor opción tecnológica.
      </p>

      <button class="btn-contacto" @click="irContacto">Contáctanos</button>
    </div>
  </section>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

function irContacto() {
  router.push('/contacto')
}

const equipo = {
  ceo: {
    nombre: 'Saul Rivera',
    rol: 'Desarrollador FullStack',
    descripcion: 'Fundador y líder de QuttaDev. Experto en desarrollo web de principio a fin, abarcando tanto el frontend como el backend. Encargado de transformar ideas en productos reales.',
    icono: `<svg width="40" height="40" fill="#00c6ff" viewBox="0 0 24 24"><path d="M12 2a6 6 0 00-6 6c0 3.31 6 8 6 8s6-4.69 6-8a6 6 0 00-6-6zm0 8a2 2 0 110-4 2 2 0 010 4z"/><path d="M4 20v-2c0-2.21 3.58-4 8-4s8 1.79 8 4v2H4z"/></svg>`
  },
  hugo: {
    nombre: 'Hugo Cervantes',
    rol: 'Desarrollador Frontend',
    descripcion: 'Especialista en interfaces web modernas y funcionales. Se enfoca en ofrecer experiencias visuales limpias, intuitivas y bien estructuradas.',
    icono: `<svg width="40" height="40" fill="#00c6ff" viewBox="0 0 24 24"><path d="M3 4v16h18V4H3zm16 14H5V6h14v12z"/><path d="M8 8h8v2H8zm0 4h8v2H8z"/></svg>`
  },
  diego: {
    nombre: 'Diego Romero',
    rol: 'Desarrollador Frontend',
    descripcion: 'Apasionado por el diseño de interfaces dinámicas, Diego aporta creatividad y eficiencia a la estructura visual de cada uno de nuestros productos.',
    icono: `<svg width="40" height="40" fill="#00c6ff" viewBox="0 0 24 24"><path d="M3 4v16h18V4H3zm16 14H5V6h14v12z"/><path d="M8 8h8v2H8zm0 4h8v2H8z"/></svg>`
  },
  mark: {
  nombre: 'Mark Alvarez',
  rol: 'QA Tester / Control de Calidad',
  descripcion: 'Encargado de probar minuciosamente todas nuestras aplicaciones antes de su entrega. Su trabajo asegura que cada producto funcione sin errores, sea estable, y cumpla con los más altos estándares de calidad.',
  icono: `<svg width="40" height="40" fill="#00c6ff" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zm0 7.5L4 6.1v11.8L12 21l8-3.1V6.1l-8 3.4z"/></svg>`
},
  juan: {
    nombre: 'Juan Llamas',
    rol: 'Ventas y Asesoría',
    descripcion: 'Encargado del trato directo con nuestros clientes. Brinda asesoramiento personalizado y profesional, guiando cada proyecto con una visión estratégica.',
    icono: `<svg width="40" height="40" fill="#00c6ff" viewBox="0 0 24 24"><path d="M3 3h18v2H3zm0 4h18v2H3zm0 4h12v2H3z"/><path d="M16 13h5v2h-5zm0 4h5v2h-5z"/></svg>`
  }
}
</script>

<style scoped>
.nosotros-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #222;
}

.nosotros-container h1 {
  font-size: 2.2rem;
  margin-bottom: 2rem;
  color: #00c6ff;
}

.miembros {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
}

.miembro-card {
  background-color: #f3f6fa;
  border-radius: 16px;
  padding: 1.5rem;
  width: 280px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  text-align: center;
  animation: fadeIn 0.6s ease forwards;
  opacity: 0;
  transform: translateY(20px);
}

.miembro-card h2 {
  font-size: 1.4rem;
  color: #0077b6;
  margin-bottom: 0.25rem;
}

.miembro-card h3 {
  font-size: 1rem;
  color: #555;
  margin-bottom: 0.75rem;
  font-weight: 600;
}

.miembro-card p {
  font-size: 0.95rem;
  line-height: 1.6;
  font-weight: 500;
}

.icono {
  margin-bottom: 1rem;
}

@keyframes fadeIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.mensaje-final {
  margin-top: 3rem;
  font-size: 1.1rem;
  font-weight: 600;
  line-height: 1.7;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.btn-contacto {
  margin-top: 2rem;
  background-color: #00c6ff;
  color: white;
  border: none;
  padding: 0.75rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 25px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-contacto:hover {
  background-color: #009acc;
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
