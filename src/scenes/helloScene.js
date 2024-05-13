import Stinker from '../sprites/stinker'
import Mario from '../sprites/mario'
import CollidersManager from '../collidersManager'
import SceneTeleport from '../Tools/sceneTeleport'
import Scene from './scene'
import Coin from '../sprites/coin'
import Pipe from "../Tools/pipe"
const path = require('path')

export default class HelloScene extends Scene {   
    preload() {
        super.preload()
        Mario.preload(this)
        Stinker.preload(this)
        Coin.preload(this)
        this.load.image('backgroundHello', 'background_hello.png')
        this.load.image('brick', 'brick.png')
        this.load.image('pipeLeftTop', 'pipe_left_top.png')
        this.load.image('pipeLeft', 'pipe_left.png')
    }

    create() {
        this.cursors = this.input.keyboard.createCursorKeys()

        this.initPlatform();
        this.startPositionX = this.sys.game.canvas.width / 2
        this.startPositionY = 0
        this.groundPositionY = 686

        this.player = new Mario(this, this.startPositionX, this.startPositionY)
        this.collidersManager = new CollidersManager(this.player, this.solidPlatforms, this)

        this.goToMainTeleport = new SceneTeleport(this.player, this)
        this.goToMainTeleport.setEntryPoint(1166, this.groundPositionY)
        this.goToMainTeleport.setOriginScene('helloScene')
        this.goToMainTeleport.setDestinationScene('mainScene')

        super.create('Use arrow keys ⬅⬆⮕ to move')
    }

    initPlatform() {
        this.cameras.main.setBackgroundColor('#000000')
        this.solidPlatforms = this.physics.add.staticGroup()
        this.ghostPlatforms = this.physics.add.staticGroup()

        this.canvasWidth = this.game.canvas.width
        this.canvasHeight = this.game.canvas.height

        this.solidPlatforms.create(600, 400, 'backgroundHello')

        for (let i = 0; i <= this.canvasWidth; i+= 32) {
            this.solidPlatforms.create(i, (this.canvasHeight - 66), 'brick')
        }

        // Pipes
        new Pipe('left', 1170, 692, this.solidPlatforms, this.ghostPlatforms)
    }

    getColliderManager() {
        return this.collidersManager
    }

    update() {
        this.player.update(this.cursors)
        this.goToMainTeleport.update()
    }
}