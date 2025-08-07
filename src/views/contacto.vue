<template>
  <section class="contacto-container">
    <h1>Contáctanos</h1>
    <p>
      ¿Tienes una idea, proyecto o necesitas asesoría? Estamos aquí para ayudarte a construir soluciones digitales a tu medida. ¡Escríbenos!
    </p>

    <form
      ref="form"
      @submit.prevent="handleSubmit"
      action="https://formsubmit.co/ing.saul.rivera004@gmail.com"
      method="POST"
      class="formulario-contacto"
    >
      <input type="text" name="name" placeholder="Ingresa tu nombre" required />
      <input type="email" name="email" placeholder="Ingresa tu correo" required />
      <textarea name="message" placeholder="Escribenos tu idea" required></textarea>

      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value="https://quttadev.lat/gracias.html" />

      <button type="submit" class="btn-enviar" :disabled="enviando">
        {{ enviando ? "Enviando..." : "Enviar mensaje" }}
      </button>
    </form>

    <p v-if="mensajeEnvio" class="mensaje-envio">{{ mensajeEnvio }}</p>

    <a :href="whatsappLink" target="_blank" class="btn-whatsapp">
      Enviar mensaje por WhatsApp
    </a>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const numeroWhatsApp = '523310914515'
const mensaje = encodeURIComponent("Hola, me gustaría saber más sobre sus servicios de desarrollo.")
const whatsappLink = `https://wa.me/${numeroWhatsApp}?text=${mensaje}`

const mensajeEnvio = ref('')
const enviando = ref(false)
const form = ref(null)

function handleSubmit() {
  enviando.value = true
  mensajeEnvio.value = "Nos pondremos en contacto lo más rápido posible."

  // Envía el formulario programáticamente (esto recarga la página)
  // Si quieres evitar recarga, no uses submit() y tendrías que usar fetch (pero FormSubmit no lo permite)
  form.value.submit()
}
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
  transform: translateY(10vh);
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

.formulario-contacto {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  gap: 1rem;
  margin-bottom: 1rem;
}

.formulario-contacto input,
.formulario-contacto textarea {
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 1rem;
  font-family: inherit;
}

.formulario-contacto textarea {
  min-height: 120px;
  resize: vertical;
}

.btn-enviar {
  background-color: #00c6ff;
  color: white;
  padding: 0.8rem;
  border: none;
  border-radius: 30px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-enviar:disabled {
  background-color: #009fd4;
  cursor: not-allowed;
}

.btn-enviar:hover:not(:disabled) {
  background-color: #009fd4;
}

.mensaje-envio {
  font-weight: 700;
  color: #00c6ff;
  margin-bottom: 1.5rem;
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
</style>
