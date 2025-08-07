<script setup>
import menus from './components/menu.vue'; 
import fin from './components/fin.vue';
</script>

<template> 
  <div id="app">
    <menus />
    <main class="main-content">
      <router-view />
    </main>
    <fin />
  </div>
</template>

<style>
html, body, #app {
  height: 100%;
  margin: 0;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex-grow: 1;
  padding: 1rem 2rem;
}

</style>
