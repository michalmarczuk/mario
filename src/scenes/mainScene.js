import GameOver from '../dialogs/gameOver'
import GameState from '../gameState'
import MainPlatform from '../platforms/mainPlatform'
import Stinker from '../sprites/stinker'
import Mario from '../sprites/mario'
import CollidersManager from '../collidersManager'
import Teleport from '../Tools/teleport'
import SceneTeleport from '../Tools/sceneTeleport'
import Scene from './scene'
const path = require('path')

export default class MainScene extends Scene {    
    preload() {
        super.preload()
        Mario.preload(this)
        Stinker.preload(this)
        MainPlatform.preload(this)
    }

    create() {
        this.cursors = this.input.keyboard.createCursorKeys()
        this.gameState = new GameState()
        this.gameOver = new GameOver(this.gameState, this, this.cursors)
        this.canvasWidth = this.sys.game.canvas.width
        this.canvasHeight = this.sys.game.canvas.height

        const mainPlatform = new MainPlatform(this)
        this.player = new Mario(this)
        this.collidersManager = new CollidersManager(this.player, mainPlatform.getPlatforms(), this)

        this.stinker = new Stinker(10, 0, 10, this)
        this.collidersManager.registerEnemy(this.stinker)
        this.collidersManager.registerEnemy(new Stinker(700, 0, 1000, this))
        this.collidersManager.registerEnemy(new Stinker(500, 0, 1000, this))
        this.collidersManager.registerEnemy(new Stinker(935, 447, 1000, this))
        this.collidersManager.registerEnemy(new Stinker(970, 447, 1000, this))

        this.upDownTeleport = new Teleport(this.player)
        this.upDownTeleport.setEntryPoint(0, 352)
        this.upDownTeleport.setExitPoint(1150, 686)

        this.goToWorkExperienceTeleport = new SceneTeleport(this.player, this)
        this.goToWorkExperienceTeleport.setEntryPoint(1166, 195)
        this.goToWorkExperienceTeleport.setBackPoint(1100, 195)
        this.goToWorkExperienceTeleport.setOriginScene('mainScene')
        this.goToWorkExperienceTeleport.setDestinationScene('experienceScene')

        this.goToEducationAndCertificatesTeleport = new SceneTeleport(this.player, this)
        this.goToEducationAndCertificatesTeleport.setEntryPoint(0, 469)
        this.goToEducationAndCertificatesTeleport.setBackPoint(68, 469)
        this.goToEducationAndCertificatesTeleport.setOriginScene('mainScene')
        this.goToEducationAndCertificatesTeleport.setDestinationScene('educationAndCertificatesScene')

        this.goToSkillsTeleport = new SceneTeleport(this.player, this)
        this.goToSkillsTeleport.setEntryPoint(546, 544)
        this.goToSkillsTeleport.setBackPoint(482, 544)
        this.goToSkillsTeleport.setOriginScene('mainScene')
        this.goToSkillsTeleport.setDestinationScene('skillsScene')

        super.create()
    }

    //Good idea would be to create getters for more stuff here
    getColliderManager() {
        return this.collidersManager
    }

    update() {
        if (this.gameState.isGameOver) {
            this.gameOver.update()            
        } else {
            this.player.update(this.cursors)
        }

        this.upDownTeleport.update()        
        this.goToWorkExperienceTeleport.update()
        this.goToEducationAndCertificatesTeleport.update()
        this.goToSkillsTeleport.update()

        // console.log(this.player.body.position.x, this.player.body.position.y)
    }
}