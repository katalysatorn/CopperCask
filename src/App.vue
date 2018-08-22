<template>
  <div id="app">
    <Navbar brand="CopperCask" />
    <WelcomePage />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Navbar from './components/Navbar.vue'
import WelcomePage from './components/WelcomePage.vue'

@Component({
  components: {
  Navbar,
  WelcomePage,
  },
  })
export default class App extends Vue {}
</script>

<style lang="scss">

</style>
