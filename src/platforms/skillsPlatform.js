import DescriptionBricks from "../Tools/descriptionBricks"
import Pipe from "../Tools/pipe"

export default class SkillsPlatform {
    constructor(scene) {
        scene.cameras.main.setBackgroundColor('#000000')
        this.solidPlatforms = scene.physics.add.staticGroup()
        this.ghostPlatforms = scene.physics.add.staticGroup()

        this.canvasWidth = scene.game.canvas.width
        this.canvasHeight = scene.game.canvas.height

        this.solidPlatforms.create(600, 400, 'backgroundBlack')

        for (let i = 0; i <= this.canvasWidth; i+= 32) {
            this.solidPlatforms.create(i, (this.canvasHeight - 66), 'brick')
        }

        // Pipes
        new Pipe('left', 1170, 692, this.solidPlatforms, this.ghostPlatforms)

        // Title
        scene.add.text(50, 75, `Skills`, { fontSize: 22, fill: '#FFF' })

        new DescriptionBricks(6, 300, 650, this.solidPlatforms, this.ghostPlatforms, scene, 'Javascript')
        new DescriptionBricks(5, 80, 560, this.solidPlatforms, this.ghostPlatforms, scene, 'Selenium')
        new DescriptionBricks(6, 720, 560, this.solidPlatforms, this.ghostPlatforms, scene, 'Playwright')
        new DescriptionBricks(4, 1000, 560, this.solidPlatforms, this.ghostPlatforms, scene, 'Python')
        new DescriptionBricks(3, 470, 560, this.solidPlatforms, this.ghostPlatforms, scene, 'Java')
        new DescriptionBricks(5, 220, 470, this.solidPlatforms, this.ghostPlatforms, scene, 'TestCafe')
        new DescriptionBricks(4, 600, 470, this.solidPlatforms, this.ghostPlatforms, scene, 'Jmeter')
        new DescriptionBricks(4, 900, 470, this.solidPlatforms, this.ghostPlatforms, scene, 'Cypress')
        new DescriptionBricks(3, 70, 380, this.solidPlatforms, this.ghostPlatforms, scene, 'Burp')
        new DescriptionBricks(4, 300, 380, this.solidPlatforms, this.ghostPlatforms, scene, 'Postman')
        new DescriptionBricks(4, 500, 380, this.solidPlatforms, this.ghostPlatforms, scene, 'Jenkins')
        new DescriptionBricks(3, 880, 380, this.solidPlatforms, this.ghostPlatforms, scene, 'SQL')
        new DescriptionBricks(3, 150, 290, this.solidPlatforms, this.ghostPlatforms, scene, 'GIT')
        new DescriptionBricks(5, 400, 290, this.solidPlatforms, this.ghostPlatforms, scene, 'Cucumber')
        new DescriptionBricks(5, 700, 290, this.solidPlatforms, this.ghostPlatforms, scene, 'Wireshark')
        new DescriptionBricks(4, 300, 200, this.solidPlatforms, this.ghostPlatforms, scene, 'Docker')
        new DescriptionBricks(3, 500, 200, this.solidPlatforms, this.ghostPlatforms, scene, 'Xray')
        new DescriptionBricks(4, 800, 200, this.solidPlatforms, this.ghostPlatforms, scene, 'Grafana')
    }

    static preload(scene) {
        scene.load.image('backgroundBlack', 'background_black.png')
        scene.load.image('brick', 'brick.png')
        scene.load.image('pipeLeftTop', 'pipe_left_top.png')
        scene.load.image('pipeLeft', 'pipe_left.png')
    }

    getPlatforms() {
        return this.solidPlatforms
    }
}