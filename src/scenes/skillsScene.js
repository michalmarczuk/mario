import Stinker from '../sprites/stinker'
import Mario from '../sprites/mario'
import CollidersManager from '../collidersManager'
import SceneTeleport from '../Tools/sceneTeleport'
import Scene from './scene'
import Coin from '../sprites/coin'
import DescriptionBricks from "../Tools/descriptionBricks"
import Pipe from "../Tools/pipe"
const path = require('path')

export default class SkillsScene extends Scene {   
    preload() {
        super.preload()
        Mario.preload(this)
        Stinker.preload(this)
        Coin.preload(this)
        this.load.image('backgroundBlack', 'background_black.png')
        this.load.image('brick', 'brick.png')
        this.load.image('pipeLeftTop', 'pipe_left_top.png')
        this.load.image('pipeLeft', 'pipe_left.png')
    }

    create() {
        this.cursors = this.input.keyboard.createCursorKeys()
        this.canvasWidth = this.sys.game.canvas.width
        this.canvasHeight = this.sys.game.canvas.height

        this.initPlatform();
        this.startPositionX = 10
        this.startPositionY = 686   
        this.player = new Mario(this, this.startPositionX, this.startPositionY)
        this.collidersManager = new CollidersManager(this.player, this.solidPlatforms, this)

        new DescriptionBricks(6, 300, 650, this.solidPlatforms, this.ghostPlatforms, this, 'Javascript')
        new DescriptionBricks(5, 80, 560, this.solidPlatforms, this.ghostPlatforms, this, 'Selenium')
        new DescriptionBricks(6, 720, 560, this.solidPlatforms, this.ghostPlatforms, this, 'Playwright')
        new DescriptionBricks(4, 1000, 560, this.solidPlatforms, this.ghostPlatforms, this, 'Python')
        new DescriptionBricks(3, 470, 560, this.solidPlatforms, this.ghostPlatforms, this, 'Java')
        new DescriptionBricks(5, 220, 470, this.solidPlatforms, this.ghostPlatforms, this, 'TestCafe')
        new DescriptionBricks(4, 600, 470, this.solidPlatforms, this.ghostPlatforms, this, 'Jmeter')
        new DescriptionBricks(4, 900, 470, this.solidPlatforms, this.ghostPlatforms, this, 'Cypress')
        new DescriptionBricks(3, 70, 380, this.solidPlatforms, this.ghostPlatforms, this, 'Burp')
        new DescriptionBricks(4, 300, 380, this.solidPlatforms, this.ghostPlatforms, this, 'Postman')
        new DescriptionBricks(4, 500, 380, this.solidPlatforms, this.ghostPlatforms, this, 'Jenkins')
        new DescriptionBricks(3, 880, 380, this.solidPlatforms, this.ghostPlatforms, this, 'SQL')
        new DescriptionBricks(3, 150, 290, this.solidPlatforms, this.ghostPlatforms, this, 'GIT')
        new DescriptionBricks(5, 400, 290, this.solidPlatforms, this.ghostPlatforms, this, 'Cucumber')
        new DescriptionBricks(5, 700, 290, this.solidPlatforms, this.ghostPlatforms, this, 'Wireshark')
        new DescriptionBricks(4, 300, 200, this.solidPlatforms, this.ghostPlatforms, this, 'Docker')
        new DescriptionBricks(3, 500, 200, this.solidPlatforms, this.ghostPlatforms, this, 'Xray')
        new DescriptionBricks(4, 800, 200, this.solidPlatforms, this.ghostPlatforms, this, 'Grafana')

        this.goToMainTeleport = new SceneTeleport(this.player, this)
        this.goToMainTeleport.setEntryPoint(1166, this.startPositionY)
        this.goToMainTeleport.setBackPoint(this.startPositionX, this.startPositionY)
        this.goToMainTeleport.setOriginScene('skillsScene')
        this.goToMainTeleport.setDestinationScene('mainScene')

        super.create('Skills')
    }

    initPlatform() {
        this.cameras.main.setBackgroundColor('#000000')
        this.solidPlatforms = this.physics.add.staticGroup()
        this.ghostPlatforms = this.physics.add.staticGroup()

        this.canvasWidth = this.game.canvas.width
        this.canvasHeight = this.game.canvas.height

        this.solidPlatforms.create(600, 400, 'backgroundBlack')

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