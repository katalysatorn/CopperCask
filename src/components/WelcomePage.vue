<template>
  <b-jumbotron :header="header" :lead="leader">
    <p>{{ information }}</p>
    <b-btn variant="primary" :href="contactmail">Contact Developer</b-btn>
  </b-jumbotron>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data: () => {
    return {
      header: 'CopperCask',
      leader: 'A simple character manager for tabletop RPG\'s',
      contactmail: 'mailto:blair.burton@outlook.com'
    }
  }
})
</script>

<style scoped lang="scss">
  .jumbotron {
    background-color: #FFF;
    margin: 0 2em;
  }
</style>
