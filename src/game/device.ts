import * as Phaser from 'phaser'

const screenSize: Phaser.Geom.Rectangle = new Phaser.Geom.Rectangle(0, 0, 320, 240)
const {
  UP,
  DOWN,
  LEFT,
  RIGHT,
  J,
  K,
  U,
  I,
  ESC,
  ENTER,
  SPACE,
  HOME,
  PAGE_UP,
  SHIFT,
  PAGE_DOWN,
  END,
} = Phaser.Input.Keyboard.KeyCodes
const keypad = {
  UP,
  DOWN,
  LEFT,
  RIGHT,
  A: J,
  B: K,
  X: U,
  Y: I,
  MENU: ESC,
  START: ENTER,
  SELECT: SPACE,
  LK1: HOME,
  LK2: PAGE_UP,
  LK3: SHIFT,
  LK4: PAGE_DOWN,
  LK5: END,
}

export { screenSize, keypad }
