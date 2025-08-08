<template>
  <section class="reseñas-container">
    <h1>Reseñas de Nuestros Clientes</h1>

    <div class="reseñas">
      <div class="reseña-card" v-for="(r, i) in reviews" :key="i">
        <div class="icono-avatar">{{ initials(r.name) }}</div>
        <h2>{{ r.name }}</h2>
        <h3>{{ r.business }} — {{ r.projectType }}</h3>
        <p>"{{ r.testimonial }}"</p>
        <div class="rating">
          <span v-for="n in 5" :key="n" :class="{ filled: n <= r.rating }">★</span>
        </div>
        <small>{{ r.date }}</small>
      </div>
    </div>

    <div class="mensaje-final">
      <p>
        ¿Quieres que tu negocio aparezca aquí? En QuttaDev ofrecemos asesorias y precios especiales para nuevos clientes. ¡Queremos que tu proyecto sea nuestro próximo caso de éxito!
      </p>
      <button class="btn-contacto" @click="irContacto">Contáctanos</button>
    </div>
  </section>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
function irContacto() { router.push('/contacto') }

const reviews = [
  { name: 'María López', business: 'Café La Esquina', projectType: 'Tienda online + Reservas', rating: 5, testimonial: 'En 2 semanas tuvimos tienda online y las reservas subieron 30%.', date: 'Mar 12, 2025' },
  { name: 'Roberto Díaz', business: 'Ferretería Díaz', projectType: 'Catálogo de productos', rating: 4, testimonial: 'El catálogo es rápido y ahora los clientes encuentran productos fácilmente.', date: 'Abr 02, 2025' },
  { name: 'Claudia Ramos', business: 'Clínica Vital', projectType: 'Landing + Citas online', rating: 5, testimonial: 'Implementaron sistema de citas que redujo llamadas y errores en agenda.', date: 'May 20, 2025' },
  { name: 'Diego Morales', business: 'Gym PowerFit', projectType: 'Web corporativa', rating: 5, testimonial: 'Web moderna y rápida, el tráfico mejoró notablemente.', date: 'Jun 18, 2025' },
  { name: 'Laura García', business: 'Boutique Luna', projectType: 'E-commerce', rating: 4, testimonial: 'Buen soporte post-lanzamiento y pasarela de pago integrada.', date: 'Jul 05, 2025' },
  { name: 'Andrés Pérez', business: 'Restaurante El Buen Sabor', projectType: 'Menú online + Pedidos', rating: 5, testimonial: 'Menú y pedidos en tiempo récord, ventas por delivery subieron 40%.', date: 'Jul 28, 2025' }
]

function initials(name) {
  return name.split(' ').map(n => n[0]).slice(0,2).join('').toUpperCase()
}
</script>

<style scoped>
.reseñas-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #222;
}
.reseñas-container h1 {
  font-size: 2.2rem;
  margin-bottom: 2rem;
  color: #00c6ff;
}
.reseñas {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
}
.reseña-card {
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
.icono-avatar {
  background-color: #eef2ff;
  color: #1e3a8a;
  font-weight: bold;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 8px;
  margin-bottom: 1rem;
}
.reseña-card h2 {
  font-size: 1.4rem;
  color: #0077b6;
  margin-bottom: 0.25rem;
}
.reseña-card h3 {
  font-size: 1rem;
  color: #555;
  margin-bottom: 0.75rem;
  font-weight: 600;
}
.reseña-card p {
  font-size: 0.95rem;
  line-height: 1.6;
  font-weight: 500;
  font-style: italic;
}
.rating {
  margin-top: 0.5rem;
  color: gold;
  font-size: 1.2rem;
}
.rating .filled { color: gold; }
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
.btn-contacto:hover { background-color: #009acc; }
@keyframes fadeIn { to { opacity: 1; transform: translateY(0); } }
</style>
