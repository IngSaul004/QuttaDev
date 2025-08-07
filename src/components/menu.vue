<template>
  <header class="menu">
    <div class="logo-container">
      <img src="/logo3.png" alt="Logo QuttaDev" class="logo" />
      <h1 class="title">
        QuttaDev
        <span v-if="mostrarBienvenido" class="bienvenido">Bienvenido</span>
      </h1>
    </div>
    <nav>
      <ul class="nav">
        <li><router-link to="/">Inicio</router-link></li>
        <li><router-link to="/nosotros">Nosotros</router-link></li>
        <li><router-link to="/apps">Apps</router-link></li>
        <li><router-link to="/contacto">Contacto</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'menu',
  data() {
    return {
      mostrarBienvenido: false
    }
  },
  mounted() {
    setTimeout(() => {
      this.mostrarBienvenido = true
    }, 2000)
  }
}
</script>


<style scoped>
.menu {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 1rem 2rem;
  background-color: #0f1115;
  color: #ffffff;
  font-family: 'Segoe UI', Roboto, sans-serif;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.logo-container {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.logo {
  width: 40px;
  height: auto;
  margin-right: 0.75rem;
}

.title {
  font-size: 1.4rem;
  font-weight: 600;
  letter-spacing: 1px;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.bienvenido {
  color: #00c6ff;
  font-weight: 500;
  opacity: 0;
  transform: translateX(-20px);
  animation: slideIn 0.6s forwards, fadeInOut 4s ease-in-out infinite;
  padding: 10px;
}

@keyframes slideIn {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInOut {
  0% { opacity: 0; }
  25% { opacity: 1; }
  75% { opacity: 1; }
  100% { opacity: 0; }
}

.nav {
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav a {
  color: #ffffff;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s ease;
}

.nav a:hover {
  color: #00c6ff;
}

@media (max-width: 768px) {
  .menu {
    flex-direction: column;
    align-items: center;
    padding: 1rem;
  }

  .logo-container {
    justify-content: center;
    width: 100%;
    margin-bottom: 0.5rem;
  }

  .nav {
    flex-direction: row; /* ✅ Se mantiene horizontal */
    gap: 1rem;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap; /* ✅ para que se acomode si hay poco espacio */
    width: 100%;
    text-align: center;
  }

  .nav li {
    width: auto;
  }

  .nav a {
    font-size: 0.95rem;
    padding: 0.5rem;
  }
}


@media (max-width: 480px) {
  .menu {
    flex-direction: column;
    align-items: center;
    padding: 1rem;
  }

  .logo-container {
    display: flex; /* asegúrate de que sea flex */
    justify-content: center; /* centra horizontalmente */
    align-items: center; /* centra verticalmente */
    width: 100%;
    margin-bottom: 0.5rem;
    gap: 0.5rem; /* espacio pequeño entre logo y título */
  }

  .title {
    font-size: 1.2rem;
    /* Cambiar de flex a block para que se centre bien el texto */
    display: block;
    text-align: center;
    margin: 0; /* elimina margenes que afecten */
  }

  .logo {
    width: 32px;
  }

  .nav {
    gap: 0.5rem;
  }

  .nav a {
    font-size: 0.9rem;
    padding: 0.25rem 0.5rem;
  }
}


</style>
