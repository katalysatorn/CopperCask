<template>
  <div id="app">
    <Navbar brand="CopperCask" />
    <WelcomePage />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Navbar from './components/Navbar.vue'
import WelcomePage from './components/WelcomePage.vue'

export default Vue.extend({
  components: {
    Navbar,
    WelcomePage
  }
})
</script>

<style lang="scss">

</style>
