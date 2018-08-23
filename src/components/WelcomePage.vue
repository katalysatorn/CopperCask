<template>
  <b-jumbotron :header="header" :lead="leader">
    <p>{{ information }}</p>
    <b-btn v-for="(item, index) in buttons" v-bind:key="`btn-${index}`" :href="item.link">{{ item.text }}</b-btn>
  </b-jumbotron>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    header: {
      type: String,
      required: true
    },
    leader: {
      type: String,
      required: true
    },
    information: {
      type: String
    },
    buttons: {
      type: Array,
      required: true
    }
  }
})
</script>

<style scoped lang="scss">
  .jumbotron {
    background-color: #FFF;
    margin: 0 2em;
  }

  .btn {
    margin: 5px;
  }
</style>
