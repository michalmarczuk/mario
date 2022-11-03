export default class Dude extends Phaser.GameObjects.Sprite {
    constructor(scene) {
        super(scene, 100, 150, 'dude')

        this.scene = scene
        scene.physics.add.existing(this)
        scene.physics.world.enable(this)
        scene.add.existing(this)

        this.setDudeBody()
        this.setDudeAnimation()
    }

    static preload(scene) {
        scene.load.spritesheet('dude',
            'dude.png',
            { frameWidth: 32, frameHeight: 48 }
        )
    }

    update(keys) {
        if (keys.left.isDown) {
            this.body.setVelocityX(-160);

            this.anims.play('left', true)
        }
        else if (keys.right.isDown) {
            this.body.setVelocityX(160);

            this.anims.play('right', true)
        }
        else {
            this.body.setVelocityX(0);
            this.anims.play('turn');
        }

        if (keys.up.isDown && this.body.touching.down) {
            this.body.setVelocityY(-430);
        }
    }

    setDudeBody() {
        this.body.setBounce(0.2)
        this.body.setCollideWorldBounds(true)
        this.body.setGravityY(400)
    }

    setDudeAnimation() {
        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        })

        this.anims.create({
            key: 'turn',
            frames: [{ key: 'dude', frame: 4 }],
            frameRate: 20
            
        })
        
        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
        })
    }
}