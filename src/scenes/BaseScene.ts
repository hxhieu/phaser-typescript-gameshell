import * as Phaser from 'phaser'

export abstract class BaseScene extends Phaser.Scene {
  protected MenuKey: Phaser.Input.Keyboard.Key
  constructor(config: Phaser.Types.Scenes.SettingsConfig) {
    super(config)
  }

  init() {
    // TODO: Handle exit game/app
    this.input.keyboard.on('keydown_ESC', () => {
      this.game.destroy(true, true)
      setTimeout(() => {
        //nw.App.closeAllWindows()
        window.close()
      }, 1000)
    })
  }
}
