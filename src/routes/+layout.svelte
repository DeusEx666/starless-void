<script>
  import Navbar from '$lib/components/Navbar.svelte';
</script>

<Navbar />

<div class="noise"></div>
<main class="app">
  <slot />
</main>

<style>
.app {
  padding-top: 70px;
  min-height: 100vh;
  background: #0b0b0b;
  color: #e5e5e5;
  font-family: Arial, sans-serif;
}

.noise {
  position: fixed;
  inset: 0;
  background: url("/noise.png");
  opacity: 0.6;
  pointer-events: none;
  z-index: 999; 
}


</style>
