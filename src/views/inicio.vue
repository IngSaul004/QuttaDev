<template>
  <section class="inicio-container">
    <h1 class="fade-in-out">Bienvenidos a QuttaDev</h1>
  <p>
  En QuttaDev somos un equipo apasionado por la tecnología web, especializado en el desarrollo de aplicaciones web, móviles y sistemas a medida para negocios de cualquier tamaño: desde startups hasta empresas consolidadas.
</p>
<p>
  Diseñamos y creamos soluciones digitales modernas, eficientes y pensadas para brindar una experiencia de usuario excepcional (UX) y un diseño visual atractivo y funcional (UI). Nuestro objetivo es que cada proyecto no solo cumpla, sino que supere las expectativas de nuestros clientes.
</p>
<p>
  ¡Trabaja con nosotros y transforma tu negocio con tecnología personalizada que impulsa crecimiento, innovación y resultados reales!
</p>

    <button class="btn-contacto" @click="irContacto">Contacto</button>
  </section>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function irContacto() {
  // Aquí navegas a la ruta contacto, si tienes configurado el router
  router.push('/contacto');
}
</script>

<style scoped>
.inicio-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 900px;
  margin: 0 auto;
  padding: 1rem 2rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #222;
  text-align: center;
  font-weight: 600;
  transform: translateY(20vh); /* súbelo 5% de la altura del viewport */
}


.inicio-container h1 {
  font-size: 2.4rem;
  margin-bottom: 1rem;
  color: #00c6ff;
  font-weight: 800;
}

.inicio-container p {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  line-height: 1.6;
  font-weight: 600;
}

.btn-contacto {
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

.fade-in-out {
  animation: fadeInOut 4s ease-in-out infinite;
}

/* Keyframes de la animación */
@keyframes fadeInOut {
  0% { opacity: 0; }
  25% { opacity: 1; }
  75% { opacity: 1; }
  100% { opacity: 0; }
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
