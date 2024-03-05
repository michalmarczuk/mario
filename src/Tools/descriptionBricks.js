import Coin from "../sprites/coin"

export default class DescriptionBricks {
    constructor(width, x, y, solidPlatform, ghostPlatform, scene, description) {
        this.width = width
        this.x = x
        this.y = y
        this.solidPlatform = solidPlatform
        this.ghostPlatform = ghostPlatform
        this.scene = scene
        this.description = description

        this.createBricks()
    }

    createBricks() {
        this.collidersManager = this.scene.getColliderManager()
        const text = this.scene.add.text(this.x, this.y - 45, this.description, { fontSize: 24, fill: '#FFF' })
        // text.setDepth(0)

        for (let i = 0; i < this.width; i++) {
            this.solidPlatform.create(this.x + ( i * 32 ), this.y, 'brick')

            this.collidersManager.registerCoin(new Coin(this.x + ( i * 32 ) - 6, this.y - 31, this.scene))
            this.collidersManager.registerCoin(new Coin(this.x + ( i * 32 ) + 10, this.y - 31, this.scene))
        }
    }
}