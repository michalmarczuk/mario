export default class Coin extends Phaser.GameObjects.Sprite {
    constructor(respawnX, respawnY, scene) {
        super(scene, respawnX, respawnY, 'coin')

        this.scene = scene
        scene.physics.add.existing(this)
        scene.add.existing(this)
        this.body.setGravityY(-30)

        this.anims.create({
            key: 'go',
            frames: this.anims.generateFrameNumbers('coin', { start: 0, end: 2 }),
            frameRate: 5,
            repeat: -1
        })
        this.anims.play('go')
    }

    collect() {
        this.destroy()
    }

    static preload(scene) {
        scene.load.spritesheet('coin',
            'coin.png',
            { frameWidth: 18, frameHeight: 25 }
        )
    }
}