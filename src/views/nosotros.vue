<template>
  <section class="nosotros-container">
    <h1>Conoce a Nuestro Equipo</h1>

    <div class="miembros">
      <div class="miembro-card" v-for="(icono, nombre) in equipo" :key="nombre">
        <div class="icono" v-html="icono.icono"></div>
        <h2>{{ icono.nombre }}</h2>
        <h3>{{ icono.rol }}</h3>
        <p>{{ icono.descripcion }}</p>

        <!-- 🔗 Sección de links -->
        <div class="links" v-if="icono.links && icono.links.length">
          <a v-for="(link, i) in icono.links" 
             :key="i" 
             :href="link.url" 
             target="_blank" 
             rel="noopener noreferrer"
             v-html="link.icon">
          </a>
        </div>
      </div>
    </div>

    <div class="mensaje-final">
      <p>
  Somos dos amigos apasionados por la tecnología web, fascinados por todo lo que tiene que ver con el desarrollo y diseño de soluciones digitales. Con más de 2 años de experiencia trabajando en proyectos reales, nos dedicamos a crear sitios y aplicaciones que sean funcionales, modernas y adaptadas a las necesidades de nuestros clientes. En QuttaDev combinamos creatividad, dedicación y conocimiento técnico para ayudarte a potenciar tu negocio con soluciones a tu medida.
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
    descripcion: 'Fundador y líder de QuttaDev. Experto en transformar ideas en soluciones digitales completas, integrando frontend y backend con eficiencia y creatividad. Su enfoque está en entregar productos de alta calidad que generan valor real a nuestros clientes.',
    icono: `<svg width="40" height="40" fill="#00c6ff" viewBox="0 0 24 24"><path d="M12 2a6 6 0 00-6 6c0 3.31 6 8 6 8s6-4.69 6-8a6 6 0 00-6-6zm0 8a2 2 0 110-4 2 2 0 010 4z"/><path d="M4 20v-2c0-2.21 3.58-4 8-4s8 1.79 8 4v2H4z"/></svg>`,
    links: [
      {
        url: "https://www.linkedin.com/in/saul-rivera-a4411237b/",
        icon: `<svg width="28" height="28" fill="#0077b5" viewBox="0 0 24 24"><path d="M19 0h-14c-2.77 0-5 2.23-5 5v14c0 2.77 2.23 5 5 5h14c2.77 0 5-2.23 5-5v-14c0-2.77-2.23-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.29c-.96 0-1.75-.79-1.75-1.75s.79-1.75 1.75-1.75 1.75.79 1.75 1.75-.79 1.75-1.75 1.75zm13.5 11.29h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.37h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.6v5.6z"/></svg>`
      },
      {
        url: "https://github.com/IngSaul004",
        icon: `<svg width="28" height="28" fill="#333" viewBox="0 0 24 24"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.42 7.86 10.95.58.11.79-.25.79-.56v-2.05c-3.2.69-3.87-1.54-3.87-1.54-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.74 2.68 1.24 3.34.95.1-.74.4-1.24.72-1.52-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.14 1.18a10.9 10.9 0 012.86-.39c.97 0 1.94.13 2.86.39 2.17-1.49 3.13-1.18 3.13-1.18.62 1.59.23 2.76.12 3.05.73.8 1.18 1.82 1.18 3.08 0 4.43-2.7 5.41-5.27 5.7.42.36.77 1.08.77 2.19v3.24c0 .31.21.68.8.56A10.98 10.98 0 0023.5 12c0-6.35-5.15-11.5-11.5-11.5z"/></svg>`
      }
    ]
  },
  hugo: {
    nombre: 'Hugo Cervantes',
    rol: 'Desarrollador Frontend',
    descripcion: 'Apasionado por crear interfaces web modernas y altamente funcionales. Se enfoca en diseñar experiencias intuitivas, visualmente atractivas y optimizadas, asegurando que cada proyecto sea eficiente y memorable para el usuario.',
    icono: `<svg width="40" height="40" fill="#00c6ff" viewBox="0 0 24 24"><path d="M3 4v16h18V4H3zm16 14H5V6h14v12z"/><path d="M8 8h8v2H8zm0 4h8v2H8z"/></svg>`,
    links: []
  },
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
.links {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
}

.links a {
  transition: transform 0.2s ease;
}

.links a:hover {
  transform: scale(1.2);
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
