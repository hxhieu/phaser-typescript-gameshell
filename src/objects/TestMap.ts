import * as Phaser from 'phaser'

export class TestMap extends Phaser.GameObjects.Image {
  constructor(scene: Phaser.Scene) {
    super(scene, 160, 120, 'map_01')
    this.scene.add.existing(this)
  }
}
