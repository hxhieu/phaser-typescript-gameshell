import * as Phaser from 'phaser'

export class Logo extends Phaser.GameObjects.Image {
  constructor(scene: Phaser.Scene) {
    super(scene, 50, 50, 'logo')
    this.setScale(0.5, 0.5)
    this.scene.add.existing(this)
  }
}
