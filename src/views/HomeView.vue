<template>
  <div class="home">
    <NavbarZakat/>
    <div class="container d-flex justify-content-center align-items-center text-center">
    <img src="/main.jpg" alt="Logo Vue.js">
    <p>Mari Berzakat</p>
</div>

    
  </div>
</template>

<script>
// @ is an alias to /src
import NavbarZakat from '@/components/NavbarZakat.vue'



export default {
  name: 'HomeView',
  components: {
    NavbarZakat
  }
}
</script>
