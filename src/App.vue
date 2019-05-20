<template>
  <div id="app">
    <Game />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

const Game = () => import(/* webpackChunkName: "component-game" */ '@/components/Game.vue')

@Component({
  components: {
    Game,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
html,
body {
  padding: 0;
  margin: 0;
  overflow: hidden;
  text-align: center;
}
</style>
