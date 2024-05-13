import ExperiencePlatform from '../platforms/experiencePlatform';
import Stinker from '../sprites/stinker'
import Mario from '../sprites/mario';
import CollidersManager from '../collidersManager';
import SceneTeleport from '../Tools/sceneTeleport'
import Scene from './scene';
const path = require('path');

export default class ExperienceScene extends Scene {   
    preload() {
        super.preload()
        Mario.preload(this)
        Stinker.preload(this)
        ExperiencePlatform.preload(this)
    }

    create() {
        this.cursors = this.input.keyboard.createCursorKeys()
        this.canvasWidth = this.sys.game.canvas.width
        this.canvasHeight = this.sys.game.canvas.height

        const experiencePlatform = new ExperiencePlatform(this)
        this.startPositionX = 10
        this.startPositionY = 686   
        this.player = new Mario(this, this.startPositionX, this.startPositionY)
        this.collidersManager = new CollidersManager(this.player, experiencePlatform.getPlatforms(), this)

        this.goToMainTeleport = new SceneTeleport(this.player, this)
        this.goToMainTeleport.setEntryPoint(1166, this.startPositionY)
        this.goToMainTeleport.setBackPoint(this.startPositionX, this.startPositionY)
        this.goToMainTeleport.setOriginScene('experienceScene')
        this.goToMainTeleport.setDestinationScene('mainScene')

        super.create('Experience')
    }

    getColliderManager() {
        return this.collidersManager
    }

    update() {
        this.player.update(this.cursors)
        this.goToMainTeleport.update()

        // console.log(this.player.body.position.x, this.player.body.position.y)
    }
}