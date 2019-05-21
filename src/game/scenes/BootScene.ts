import * as Phaser from 'phaser'
import { Logo } from '../objects/Logo'

export class BootScene extends Phaser.Scene {
  constructor() {
    super({
      key: 'BootScene',
      active: true,
    })
  }

  preload() {
    // load out package
    this.load.pack('preload', 'assets/pack.json', 'preload')
  }

  create() {
    const logo = new Logo(this)
  }
}
