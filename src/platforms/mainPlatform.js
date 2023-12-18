import Pipe from "../Tools/pipe"

export default class MainPlatform {
    constructor(scene) {
        this.solidPlatforms = scene.physics.add.staticGroup()
        this.ghostPlatforms = scene.physics.add.staticGroup()

        this.canvasWidth = scene.game.canvas.width
        this.canvasHeight = scene.game.canvas.height

        //Background
        this.solidPlatforms.create(600, 400, 'backgroundBlueBlack')
        this.ghostPlatforms.create(400, 200, 'cloud')
        this.ghostPlatforms.create(900, 150, 'cloud')
        this.ghostPlatforms.create(100, 250, 'cloud')

        //Left and right bricks
        this.solidPlatforms.create(0, 432, 'brick')

        for (let i = 0; i <= 200 ; i+= 32) {
            this.solidPlatforms.create(0, 710 - i, 'brick')
        }

        for (let i = 0; i <= 300 ; i+= 32) {
            this.solidPlatforms.create(this.canvasWidth, 710 - i, 'brick')
        }

        //Top and bottom bricks
        for (let i = 0; i <= this.canvasWidth; i+= 32) {
            this.solidPlatforms.create(i, (this.canvasHeight / 2), 'brick')
            this.solidPlatforms.create(i, (this.canvasHeight - 66), 'brick')
        }

        //Go to skills platform
        for (let i = 400; i <= (400 + 32 * 5); i+= 32) {
            this.solidPlatforms.create(i, 310, 'brick')
        }

        //Top free bricks
        for (let i = 700; i <= (700 + 32 * 2); i+= 32) {
            this.solidPlatforms.create(i, 243, 'brick')
        }

        this.solidPlatforms.create(920, 243, 'question_cube')

        for (let i = 1120; i <= (1120 + 32 * 2); i+= 32) {
            this.solidPlatforms.create(i, 243, 'brick')
        }

        //Bottom U platform - Go to experience
        for (let i = 432; i <= (432 + 32 * 5); i+= 32) {
            this.solidPlatforms.create(340, i, 'brick')
        }

        for (let i = 372; i <= (372 + 32 * 6); i+= 32) {
            this.solidPlatforms.create(i, 592, 'brick')
        }

        for (let i = 496; i <= (496 + 32 * 3); i+= 32) {
            this.solidPlatforms.create(596, i, 'brick')
        }

        //Bottom free bricks
        for (let i = 750; i <= (750 + 32 * 1); i+= 32) {
            this.solidPlatforms.create(i, 570, 'brick')
        }
        
        for (let i = 940; i <= (940 + 32 * 1); i+= 32) {
            this.solidPlatforms.create(i, 645, 'brick')
        }

        this.solidPlatforms.create(100, 645, 'brick')
        this.solidPlatforms.create(200, 560, 'question_cube')

        //Go to education and certificates platform
        for (let i = 0; i <= (32 + 32 * 1); i+= 32) {
            this.solidPlatforms.create(i, 517, 'brick')
        }

        //Pipes
        new Pipe('right', 31, 360, this.solidPlatforms, this.ghostPlatforms) // Go down
        new Pipe('left', 1170, 690, this.solidPlatforms, this.ghostPlatforms) // Go up
        new Pipe('left', 1170, 200, this.solidPlatforms, this.ghostPlatforms) // Go to skills
        new Pipe('down', 950, 447, this.solidPlatforms, this.ghostPlatforms) // Lower level stinkers entry
        new Pipe('left', 549, 550, this.solidPlatforms, this.ghostPlatforms) // Go to work experience
        new Pipe('right', 15, 474, this.solidPlatforms, this.ghostPlatforms) // Go to education and certificates platform
    }

    static preload(scene) {
        scene.load.image('brick', 'brick.png')
        scene.load.image('question_cube', 'question_cube.png')
        scene.load.image('pipe', 'pipe.png')
        scene.load.image('pipeRightTop', 'pipe_right_top.png')
        scene.load.image('pipeRight', 'pipe_right.png')
        scene.load.image('pipeLeftTop', 'pipe_left_top.png')
        scene.load.image('pipeLeft', 'pipe_left.png')
        scene.load.image('pipeDown', 'pipe_down.png')
        scene.load.image('cloud', 'cloud.png')
        scene.load.image('backgroundBlueBlack', 'background_blue_black.png')
    }

    getPlatforms() {
        return this.solidPlatforms
    }
}