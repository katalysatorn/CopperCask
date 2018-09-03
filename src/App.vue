<template>
  <div id="app">
    <Navbar brand="CopperCask" />
    <WelcomePage
      header="CopperCask"
      brand="img/logo.png"
      leader="A simple character manager for tabletop RPG's"
      :buttons="[
        {
          text: 'Contact the developer',
          link: 'mailto:blair.burton@outlook.com'
        },
        {
          text: 'See the source',
          link: 'https://github.com/katalysatorn/CopperCask'
        }
      ]"
    />
    <notifications group="notifGroup" position="bottom right" />
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
