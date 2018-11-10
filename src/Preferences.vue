<template>
  <div id="app">
    <b-jumbotron
      header="Settings/Preferences"
      lead="Here you can edit your Settings and Preferences for CopperCask">
      <form>
        <b-button
          disabled
          class="pad"
          :pressed.sync="offlineMode"
          variant="outline-primary">
          Offline Mode
        </b-button>
        <br />

        <label for="languageSelectBox">Language: </label>
        <b-form-select
          class="pad"
          v-model="currentLanguage"
          :options="supportedLanguages"
          id="languageSelectBox" />

      </form>
    </b-jumbotron>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data: () => {
    return {
      offlineMode: true,
      currentLanguage: 'en',
      supportedLanguages: [
        { value: 'en', text: 'English' },
        { value: 'sv', text: 'Svenska', disabled: true }
      ]
    }
  }
})
</script>

<style lang="scss" scoped>
  form {
    width: 50%;
  }
  form * {
    margin-bottom: 1em;
  }
</style>
