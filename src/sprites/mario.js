export default class Mario extends Phaser.GameObjects.Sprite {
    constructor(scene, positionX = 400, positionY = 0) {
        super(scene, positionX, positionY, 'mario')

        this.scene = scene
        this.marioTurnedRight = true
        scene.physics.add.existing(this)
        scene.physics.world.enable(this)
        scene.add.existing(this)
        this.alive = true

        this.setMarioBody()
        this.setMarioAnimation()
    }

    static preload(scene) {
        scene.load.spritesheet('mario',
            'mario.png',
            { frameWidth: 34, frameHeight: 32 }
        )
    }

    update(keys) {
        if (this.alive) {
            if (keys.left.isDown) {
                this.body.setVelocityX(-160);
                this.marioTurnedRight = false
    
                if (keys.up.isDown) {
                    this.anims.play('jumpLeft', true)
                } else {
                    this.anims.play('left', true)
                }
            }
            else if (keys.right.isDown) {
                this.body.setVelocityX(160);
                this.marioTurnedRight = true
    
                if (keys.up.isDown) {
                    this.anims.play('jumpRight', true)
                } else {
                    this.anims.play('right', true)
                }
            }
            else {
                this.body.setVelocityX(0);
                if (this.marioTurnedRight) {
                    this.anims.play('stopTurnedRight')
                } else {
                    this.anims.play('stopTurnedLeft')
                }
            }
    
            if (keys.up.isDown && this.body.touching.down) {
                this.body.setVelocityY(-320)
            }
        } else {
            this.anims.play('die', true)
        }
    }

    setMarioBody() {
        this.body.setBounce(0.1)
        this.body.setCollideWorldBounds(true)
        this.body.setGravityY(500)
    }

    setMarioAnimation() {
        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('mario', { start: 1, end: 4 }),
            frameRate: 10,
            repeat: -1
        })

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('mario', { start: 6, end: 9 }),
            frameRate: 10,
            repeat: -1
        })

        this.anims.create({
            key: 'jumpLeft',
            frames: [{ key: 'mario', frame: 0 }],
            frameRate: 10,
            repeat: -1
        })

        this.anims.create({
            key: 'jumpRight',
            frames: [{ key: 'mario', frame: 10 }],
            frameRate: 10,
            repeat: -1
        })

        this.anims.create({
            key: 'stopTurnedLeft',
            frames: [{ key: 'mario', frame: 4 }],
            frameRate: 20
            
        })

        this.anims.create({
            key: 'stopTurnedRight',
            frames: [{ key: 'mario', frame: 6 }],
            frameRate: 20
            
        })

        this.anims.create({
            key: 'die',
            frames: [{ key: 'mario', frame: 5 }],
            frameRate: 20
        })
    }

    die() {
        this.alive = false
        this.body.setVelocityY(-320)
        this.body.setVelocityX(0)
        this.body.setCollideWorldBounds(false)
    }

    respawn() {
        this.alive = true
        this.body.setCollideWorldBounds(true)
        this.setPosition(100, 0)
    }

    isAlive() {
        return this.alive
    }
}