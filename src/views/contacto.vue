<template>
  <section class="contacto-container">
    <h1>Contáctanos</h1>
    <p>
      ¿Tienes una idea, proyecto o necesitas asesoría? Estamos aquí para ayudarte a construir soluciones digitales a tu medida. ¡Escríbenos!
    </p>

    <form
      ref="form"
      @submit.prevent="handleSubmit"
      action="https://formsubmit.co/3e6c8a9e829b44933f4545860a1ba478"
      method="POST"
      class="formulario-contacto"
    >
      <input type="text" name="name" placeholder="Ingresa tu nombre" required />
      <input type="email" name="email" placeholder="Ingresa tu correo" required />
      <textarea name="message" placeholder="Escríbenos tu idea" required></textarea>

      <input type="hidden" name="_captcha" value="false" />

      <button type="submit" class="btn-enviar" :disabled="enviando">
        {{ enviando ? "Enviando..." : "Enviar mensaje" }}
      </button>
    </form>

    <p v-if="mensajeEnvio" class="mensaje-envio">{{ mensajeEnvio }}</p>

    <a :href="whatsappLink" target="_blank" class="btn-whatsapp">
      <i class="fab fa-whatsapp"></i> Enviar mensaje por WhatsApp
    </a>

    <!-- Redes sociales con iconos -->
    <div class="redes-sociales">
      <p>Síguenos en:</p>
      <a href="https://www.instagram.com/quttadev.lat/" target="_blank" class="btn-instagram">
        <i class="fab fa-instagram"></i> Instagram
      </a>
      <a href="https://www.facebook.com/people/QuttaDevlat/61578871456947/?mibextid=wwXIfr" target="_blank" class="btn-facebook">
        <i class="fab fa-facebook-f"></i> Facebook
      </a>
    </div>

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
  form.value.submit()
}
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');

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
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.btn-enviar:disabled {
  background-color: #009fd4;
  cursor: not-allowed;
}

.btn-enviar:hover:not(:disabled) {
  background-color: #009fd4;
  transform: scale(1.05);
}

.mensaje-envio {
  font-weight: 700;
  color: #00c6ff;
  margin-bottom: 1.5rem;
}

.btn-whatsapp {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: #25D366;
  color: white;
  padding: 0.75rem 2rem;
  border-radius: 30px;
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
  transition: transform 0.3s ease, background-color 0.3s ease;
  margin-bottom: 1rem;
}

.btn-whatsapp:hover {
  background-color: #1ebe5d;
  transform: scale(1.05);
}

.redes-sociales {
  margin-top: 1.5rem;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.redes-sociales p {
  width: 100%;
  font-weight: 700;
  color: #222;
}

.btn-instagram,
.btn-facebook {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.5rem;
  border-radius: 30px;
  font-weight: bold;
  color: white;
  text-decoration: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.btn-instagram {
  background: linear-gradient(45deg, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5);
}

.btn-instagram:hover {
  transform: scale(1.1);
  box-shadow: 0 8px 20px rgba(246, 0, 140, 0.4);
}

.btn-facebook {
  background-color: #1877F2;
}

.btn-facebook:hover {
  transform: scale(1.1);
  box-shadow: 0 8px 20px rgba(24, 119, 242, 0.4);
}
/* === Estilos responsivos === */
@media (max-width: 768px) {
  .contacto-container {
    padding: 1.5rem;
    transform: translateY(5vh);
  }

  .contacto-container h1 {
    font-size: 1.8rem;
  }

  .contacto-container p {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
  }

  .formulario-contacto {
    gap: 0.8rem;
  }

  .formulario-contacto input,
  .formulario-contacto textarea {
    font-size: 0.95rem;
    padding: 0.7rem;
  }

  .btn-enviar,
  .btn-whatsapp,
  .btn-instagram,
  .btn-facebook {
    font-size: 0.95rem;
    padding: 0.6rem 1.5rem;
  }

  .redes-sociales {
    flex-direction: column;
    gap: 0.8rem;
  }

  .redes-sociales p {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .contacto-container {
    padding: 1rem;
    transform: translateY(2vh);
  }

  .contacto-container h1 {
    font-size: 1.5rem;
  }

  .contacto-container p {
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  .formulario-contacto input,
  .formulario-contacto textarea {
    font-size: 0.9rem;
    padding: 0.6rem;
  }

  .btn-enviar,
  .btn-whatsapp,
  .btn-instagram,
  .btn-facebook {
    font-size: 0.9rem;
    padding: 0.5rem 1.2rem;
  }
}

</style>
