<template>
  <footer class="footer">
    <div class="footer-content">
      <p>© 2025 QuttaDev. Todos los derechos reservados.</p>
      <nav class="footer-nav">
        <router-link to="/">Inicio</router-link>
        <router-link to="/nosotros">Nosotros</router-link>
        <router-link to="/contacto">Contacto</router-link>
        <a href="https://www.instagram.com/quttadev.lat/" target="_blank">Instagram</a>
        <a href="https://www.facebook.com/people/QuttaDevlat/61578871456947/?mibextid=wwXIfr" target="_blank">Facebook</a>
      </nav>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'fin'
}
</script>

<style scoped>
.footer {
  background-color: #0f1115;
  color: #ffffff;
  text-align: center;
  font-family: 'Segoe UI', Roboto, sans-serif;
  width: 100%;
  box-sizing: border-box;
  padding: 0.8rem 1rem;
}

.footer-content {
  max-width: 1100px;
  margin: 0 auto;
}

.footer p {
  margin: 0;
  font-size: 0.85rem;
  font-weight: 400;
}

.footer-nav {
  margin-top: 0.4rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  font-size: 0.85rem;
}

.footer-nav a,
.footer-nav router-link {
  color: #00c6ff;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease, transform 0.2s ease;
}

.footer-nav a:hover,
.footer-nav router-link:hover {
  color: #ffffff;
  transform: scale(1.05);
}

/* Responsive tablets */
@media (max-width: 768px) {
  .footer {
    padding: 0.7rem 1rem;
  }

  .footer-nav {
    gap: 0.4rem;
    font-size: 0.8rem;
  }
}

/* Responsive móviles */
@media (max-width: 480px) {
  .footer {
    padding: 0.6rem 0.8rem;
  }

  .footer-nav {
    flex-direction: column;
    gap: 0.25rem;
    font-size: 0.75rem;
  }

  .footer p {
    font-size: 0.75rem;
  }
}
</style>
