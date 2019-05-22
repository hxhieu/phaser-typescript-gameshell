import { BaseScene } from './BaseScene'

export class BootScene extends BaseScene {
  constructor() {
    super({
      key: 'BootScene',
      active: true,
    })
  }

  preload() {
    // load out package
    this.load.image('logo', require('../assets/logo.png'))
  }

  create() {
    this.scene.start('GameScene')
  }
}
