import Pipe from "../Tools/pipe"

export default class EducationAndCertificatesPlatform {
    constructor(scene) {
        scene.cameras.main.setBackgroundColor('#000000')
        this.solidPlatforms = scene.physics.add.staticGroup()
        this.ghostPlatforms = scene.physics.add.staticGroup()

        this.canvasWidth = scene.game.canvas.width
        this.canvasHeight = scene.game.canvas.height

        this.solidPlatforms.create(600, 400, 'backgroundBlack')

        for (let i = 0; i <= 32 * 17; i+= 32) {
            this.solidPlatforms.create(i, 500, 'stone')
        }

        this.solidPlatforms.create(32 * 18, 500, 'cube')
        this.solidPlatforms.create(32 * 19, 500, 'cube')
        this.solidPlatforms.create(32 * 19, 500 + 32, 'cube')
        this.solidPlatforms.create(32 * 19, 500 + 2 * 32, 'cube')
        this.solidPlatforms.create(32 * 20, 500 + 2 * 32, 'cube')
        this.solidPlatforms.create(32 * 21, 500 + 2 * 32, 'cube')
        this.solidPlatforms.create(32 * 22, 500 + 2 * 32, 'cube')
        this.solidPlatforms.create(32 * 22, 500 + 3 * 32, 'cube')
        this.solidPlatforms.create(32 * 22, 500 + 4 * 32, 'cube')
        this.solidPlatforms.create(32 * 23, 500 + 4 * 32, 'cube')
        this.solidPlatforms.create(32 * 24, 500 + 4 * 32, 'cube')
        this.solidPlatforms.create(32 * 25, 500 + 4 * 32, 'cube')
        this.solidPlatforms.create(32 * 25, 500 + 5 * 32, 'cube')
        this.solidPlatforms.create(32 * 25, 500 + 6 * 32, 'cube')
        this.solidPlatforms.create(32 * 26, 500 + 6 * 32, 'cube')

        for (let i = 32 * 27; i <= this.canvasWidth; i+= 32) {
            this.solidPlatforms.create(i, 500 + 6 * 32, 'stone')
        }

        scene.add.text(50, 555, 'Katowice Institute of Information (2007 - 2011)', { fontSize: 14, fill: '#FFF' })
        scene.add.text(50, 580, 'Computer Science', { fontSize: 20, fill: '#FFF' })

        scene.add.text(50, 640, 'Institute of Banking and Finances in Katowice (2003 - 2008)', { fontSize: 14, fill: '#FFF' })
        scene.add.text(50, 665, 'Computer Science in Economy', { fontSize: 20, fill: '#FFF' })

        for (let i = 32 * 17; i <= this.canvasWidth; i+= 32) {
            this.solidPlatforms.create(i, 280, 'stone')
        }

        this.solidPlatforms.create(32 * 16, 280, 'cube')

        for (let i = 32 * 6; i <= 32 * 12; i+= 32) {
            this.solidPlatforms.create(i, 280, 'cube')
        }

        scene.add.text(530, 200, 'ISTQB® Certified Tester, Foundation Level', { fontSize: 17, fill: '#FFF' })
        scene.add.text(530, 230, 'Specification by example: from user stories to acceptance tests', { fontSize: 17, fill: '#FFF' })

        for (let i = 0; i <= this.canvasWidth; i+= 32) {
            this.solidPlatforms.create(i, (this.canvasHeight - 66), 'lava')
        }

        // Pipes
        new Pipe('left', 1170, 650, this.solidPlatforms, this.ghostPlatforms)

        // Test
        scene.add.text(50, 75, `Education and Certificates`, { fontSize: 22, fill: '#FFF' })
    }

    static preload(scene) {
        scene.load.image('backgroundBlack', 'background_black.png')
        scene.load.image('brick', 'brick.png')
        scene.load.image('iron', 'iron.png')
        scene.load.image('lava', 'lava.png')
        scene.load.image('stone', 'stone.png')
        scene.load.image('cube', 'cube.png')
        scene.load.image('brick_small', 'brick_small.png')
        scene.load.image('pipeLeftTop', 'pipe_left_top.png')
        scene.load.image('pipeLeft', 'pipe_left.png')
    }

    getPlatforms() {
        return this.solidPlatforms
    }
}