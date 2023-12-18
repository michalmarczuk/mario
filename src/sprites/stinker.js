import CollidersManager from "../collidersManager"
import Factory from "../Tools/gameFactory";

export default class Stinker extends Phaser.GameObjects.Sprite {
    constructor(respawnX, respawnY, respawnTime, scene) {
        super(scene, respawnX, respawnY, 'stinker')

        // this.collidersManager = new CollidersManager();
        this.collidersManager = scene.getColliderManager()
        this.scene = scene
        scene.physics.add.existing(this)
        scene.add.existing(this)
        this.respawnX = respawnX
        this.respawnY = respawnY
        this.respawnTime = respawnTime

        this.body.setBounceX(1)
        this.body.setGravityY(500)
        this.id = Math.random().toString(36).substring(2,15)

        this.anims.create({
            key: 'go',
            frames: this.anims.generateFrameNumbers('stinker', { start: 0, end: 2 }),
            frameRate: 10,
            repeat: -1
        })
        this.anims.play('go')

        scene.time.delayedCall(1000, touchGround, [this], this);

        setInterval(() => {
            if (!this.visible || this.isOutsideTheScreen()) {
                this.respawn()
            } 
        }, this.respawnTime)

        function touchGround(enemyTest) {
            enemyTest.body.setVelocityX(40)
        }
    }

    static preload(scene) {
        scene.load.spritesheet('stinker',
            'stinker.png',
            { frameWidth: 25, frameHeight: 25 }
        )
    }

    getId() {
        return this.id
    }

    isOutsideTheScreen() {
        return this.x > Factory.getGame().config.width || this.x < 0
    }

    die() {
        this.body.setVelocityX(0)
        this.scaleY = .3
        this.stop()
        setTimeout(() => this.visible = false, 3000)
    }

    respawn() {
        this.body.setVelocityX(0)
        this.scaleY = 1
        this.setPosition(this.respawnX, this.respawnY)
        this.anims.play('go')
        this.collidersManager.respawnEnemy(this)
        this.visible = true
        
        this.scene.time.delayedCall(1000, (stinker) => stinker.body.setVelocityX(40), [this], this);
    }
}