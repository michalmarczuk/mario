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
        for (let i = 0; i < this.width; i++) {
            this.solidPlatform.create(this.x + ( i * 32 ), this.y, 'brick')
        }

        this.scene.add.text(this.x, this.y - 45, this.description, { fontSize: 24, fill: '#FFF' })
    }
}