import * as Phaser from 'phaser'
import { screenSize } from './device'
import { BootScene } from './scenes/BootScene'
import { GameScene } from './scenes/GameScene'

// game class
export class Game extends Phaser.Game {
  constructor() {
    //TODO: Proper scale
    const scale = 1
    super({
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
    this.scene.add('BootScene', BootScene)
    this.scene.add('GameScene', GameScene)
  }
}

// when the page is loaded, create our game instance
window.addEventListener('load', () => {
  new Game()
})
