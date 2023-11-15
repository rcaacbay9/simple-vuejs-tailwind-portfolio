<template>
  <div class="bg-blue-100 min-h-screen flex items-center justify-center">
    <div class="w-full max-w-screen-lg">
      <Header />
      <RouterView />
      <Footer />
    </div>
  </div>
</template>


<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import { RouterLink, RouterView } from 'vue-router'

export default {

  components: {
    Header,
    Footer
  }

};
</script>