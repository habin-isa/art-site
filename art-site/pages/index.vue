<template>
  <div class="app">
    <h1><homepage /></h1>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
import HomePage from '~/components/HomePage.vue'

export default {
  components: {
    Logo,
    VuetifyLogo,
    'homepage': HomePage
  },
}
</script>
