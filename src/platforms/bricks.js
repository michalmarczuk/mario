export default class Bricks {
    constructor(scene) {
        this.platforms = scene.physics.add.staticGroup()
        scene.load.image('brick', 'brick.png')

        this.canvasWidth = scene.game.canvas.width
        this.canvasHeight = scene.game.canvas.height

        //Left and right bricks
        for (let i = 0; i <= 300 ; i+= 32) {
            this.platforms.create(0, (this.canvasWidth / 2) - i, 'brick')
            this.platforms.create(this.canvasWidth, (this.canvasWidth / 2) - i, 'brick')
        }

        //Top and bottom bricks
        for (let i = 0; i <= this.canvasWidth; i+= 32) {
            this.platforms.create(i, (this.canvasWidth / 4), 'brick')
            this.platforms.create(i, (this.canvasWidth / 2), 'brick')
        }
    }

    static preload(scene) {
        scene.load.image('brick', 'brick.png')
    }

    getPlatforms() {
        return this.platforms
    }
}