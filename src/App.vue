<template>
  <div id="app">
    <Navbar brand="CopperCask" />
    <notifications group="notifGroup" position="bottom right" />
    <router-view class="view"></router-view>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Navbar from './components/Navbar.vue'

export default Vue.extend({
  components: {
    Navbar
  }
})
</script>

<style lang="scss">
  .view {
    margin: 2em;
  }
</style>
