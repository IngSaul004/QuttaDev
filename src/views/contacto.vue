<template>
  <section class="contacto-container">
    <h1>Contáctanos</h1>
    <p>
      ¿Tienes una idea, proyecto o necesitas asesoría? Estamos aquí para ayudarte a construir soluciones digitales a tu medida. ¡Escríbenos!
    </p>
    <a
      :href="whatsappLink"
      target="_blank"
      class="btn-whatsapp"
    >
      Enviar mensaje por WhatsApp
    </a>
  </section>
</template>

<script setup>
// Reemplaza con tu número real en formato internacional sin espacios
const numeroWhatsApp = '523310914515' // 🇲🇽 ejemplo: 52 (código país) + 1 + número
const mensaje = encodeURIComponent("Hola, me gustaría saber más sobre sus servicios de desarrollo.")
const whatsappLink = `https://wa.me/${numeroWhatsApp}?text=${mensaje}`
</script>

<style scoped>
.contacto-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #222;
  transform: translateY(10vh); /* súbelo 5% de la altura del viewport */
}

.contacto-container h1 {
  font-size: 2.2rem;
  margin-bottom: 1rem;
  color: #00c6ff;
  font-weight: 800;
}

.contacto-container p {
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  font-weight: 600;
}

.btn-whatsapp {
  display: inline-block;
  background-color: #25D366;
  color: white;
  padding: 0.75rem 2rem;
  border-radius: 30px;
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.btn-whatsapp:hover {
  background-color: #1ebe5d;
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
