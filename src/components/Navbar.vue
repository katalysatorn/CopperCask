<template>
  <b-navbar toggleable="md">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand to="/">{{ brand }}</b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav>
        <b-nav-item to="/characters">Characters</b-nav-item>
        <b-nav-item to="/battle">Battle</b-nav-item>
        <b-nav-item to="/newchar">New Character</b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input v-model="diceString" size="sm" id="dicerollerform" class="mr-sm-2" type="text" placeholder="Try '2d6 + 3, 8d5 - 4'" />
        </b-nav-form>
        <b-button to="/preferences" size="sm" class="my-2 my-sm-0">Preferences</b-button>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script lang="ts">
import Vue from 'vue'
import { dicerollerSubmit, rollDice } from '@/Diceroller'

export default Vue.extend({
  props: {
    brand: String
  },
  data: () => {
    return {
      diceString: ''
    }
  },
  mounted () {
    let f: HTMLElement | null = document.getElementById('dicerollerform')

    if (f) {
      f.addEventListener('keydown', (e) => {
        if (e.keyCode === 13) {
          e.preventDefault()

          let returnString = ''

          try {
            dicerollerSubmit(this.diceString).forEach(roll => {
              returnString = `For ${roll.count}d${roll.size}`
              if (!isNaN(roll.mod)) {
                console.log(roll.mod)
                switch (Math.sign(roll.mod)) {
                  case 0: break
                  case 1: returnString += `+${roll.mod}`; break
                  case -1: returnString += `-${Math.abs(roll.mod)}`; break
                }
              }
              returnString += `: ${rollDice(1, roll.size, roll.count) + roll.mod}`

              this.$notify({
                group: 'notifGroup',
                title: 'Roll Result: 🎲',
                text: returnString,
                duration: 10 * 1000
              })
            })
          } catch (e) {
            returnString = e.message
          }
        }
      })
    }
  }
})
</script>

<style scoped lang="scss">
  nav {
    background-color: #ffb74d;
  }
</style>
