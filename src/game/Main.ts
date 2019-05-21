import * as Phaser from 'phaser'
import { BootScene } from './scenes/BootScene'
import { GameScene } from './scenes/GameScene'
import { screenSize } from './device'

export class Main extends Phaser.Game {
  private static _game: Phaser.Game
  static start() {
    //TODO: Proper scale
    const scale = 1
    this._game = new Phaser.Game({
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
    this._game.scene.add('BootScene', BootScene)
    this._game.scene.add('GameScene', GameScene)
  }

  static instance(): Phaser.Game {
    return this._game
  }
}
