import * as Phaser from 'phaser'
import { screenSize } from './device'
import { BootScene } from './scenes/BootScene'
import { GameScene } from './scenes/GameScene'

// game class
export class Game extends Phaser.Game {
  constructor() {
    super({
      title: 'Garden Wars',
      width: screenSize.width,
      height: screenSize.height,
      parent: 'game',
      backgroundColor: '#000',
      scale: {
        parent: 'game',
        mode: Phaser.Scale.FIT,
      },
    })
    this.scene.add('BootScene', BootScene)
    this.scene.add('GameScene', GameScene)
  }
}

// when the page is loaded, create our game instance
window.addEventListener('load', () => {
  new Game()
})
