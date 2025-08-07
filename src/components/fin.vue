<template>
  <footer class="footer">
    <div class="footer-content">
      <p>© 2025 QuttaDev. Todos los derechos reservados.</p>
      <nav class="footer-nav">
        <router-link to="/">Inicio</router-link> |
        <router-link to="/nosotros">Nosotros</router-link> |
        <router-link to="/contacto">Contacto</router-link>
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
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.15);
  position: relative;
  width: 100%;
  z-index: 1000;
  box-sizing: border-box;
  padding: 1rem 2rem;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-nav {
  margin-top: 0.5rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.footer-nav a {
  color: #00c6ff;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.footer-nav a:hover {
  color: #ffffff;
}

/* Responsive para tablets */
@media (max-width: 768px) {
  .footer {
    padding: 1rem;
    font-size: 0.95rem;
  }

  .footer-nav {
    flex-direction: row;
    gap: 0.75rem;
  }
}

/* Responsive para móviles */
@media (max-width: 480px) {
  .footer {
    padding: 0.75rem 1rem;
    font-size: 0.85rem;
  }

  .footer-nav {
    flex-direction: column;
    gap: 0.25rem;
  }

  .footer-nav a::after {
    content: none;
  }
}
</style>
