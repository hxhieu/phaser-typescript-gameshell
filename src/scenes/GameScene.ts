import { Logo } from '@/objects/Logo'
import { BaseScene } from './BaseScene'

export class GameScene extends BaseScene {
  constructor() {
    super({
      key: 'GameScene',
    })
  }

  create() {
    const logo = new Logo(this)
  }
}
