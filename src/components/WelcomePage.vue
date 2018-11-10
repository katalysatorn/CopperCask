<template>
  <b-jumbotron :header="header" :lead="leader">
    <p>{{ information }}</p>
    <b-btn v-for="(item, index) in buttons" v-bind:key="`btn-${index}`" :href="item.link">{{ item.text }}</b-btn>
  </b-jumbotron>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data: () => {
    return {
      header: 'CopperCask',
      brand: 'img/logo.png',
      leader: 'A simple character manager for tabletop RPG\'s',
      buttons: [
        {
          text: 'Contact the developer',
          link: 'mailto:blair.burton@outlook.com'
        }, {
          text: 'See the source',
          link: 'https://github.com/katalysatorn/CopperCask'
        }
      ]
    }
  }
})
</script>

<style scoped lang="scss">
  .jumbotron {
    background-color: #FFF;
  }

  .btn {
    margin: 5px;
  }
</style>
