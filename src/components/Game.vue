<template>
  <div id="game"></div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Main } from '../game/Main'
import { screenSize } from '../device'

@Component
export default class Game extends Vue {
  mounted() {
    // TODO: Detect scale
    const scale = 2
    new Main({
      title: 'Garden Wars',
      width: screenSize.width,
      height: screenSize.height,
      parent: 'game',
      backgroundColor: '#000',
      scale: {
        parent: 'game',
        mode: Phaser.Scale.FIT,
        width: screenSize.width * scale,
        height: screenSize.height * scale,
      },
    })
  }
}
</script>

<style lang="scss">
</style>
