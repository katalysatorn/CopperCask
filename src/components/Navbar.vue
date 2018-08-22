<template>
  <b-navbar toggleable="md">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand href="#">{{ brand }}</b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav>
        <b-nav-item href="#">Characters</b-nav-item>
        <b-nav-item href="#">Battle</b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" id="dicerollerform" class="mr-sm-2" type="text" placeholder="Try '2d6 + 3, 8d5 - 4'" />
        </b-nav-form>
        <b-button size="sm" class="my-2 my-sm-0">Preferences</b-button>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    brand: String
  }
})
</script>

<style scoped lang="scss">
  nav {
    background-color: #ffb74d;
  }
</style>
