import { TestMap } from '@/objects/TestMap'
import { BaseScene } from './BaseScene'

export class GameScene extends BaseScene {
  constructor() {
    super({
      key: 'GameScene',
    })
  }

  create() {
    new TestMap(this)
  }
}
