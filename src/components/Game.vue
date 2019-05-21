<template>
  <div id="game"></div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Main } from '../game/Main'

@Component
export default class Game extends Vue {
  mounted() {
    Main.start()
  }
}
</script>

<style lang="scss">
</style>
