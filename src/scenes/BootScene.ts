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
    this.load.image('map_01', require('../assets/map_01.png'))
  }

  create() {
    this.scene.start('GameScene')
  }
}
