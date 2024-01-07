import Phaser from 'phaser'
import ScenesManager from '../scenesManager';
import Scene from '../scenes/scene';

export default class TitleScreen extends Scene {
    preload() {
        super.preload()
        this.load.image('me', 'me.png')
    }

    create() {
        super.create()
        const screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
        const screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;
        const introText = this.add.text(815, 260,
            `Hello and a warm welcome to my corner of the internet!\n` + 
            `I'm Michał Marczuk, and I'm thrilled to have you here.\n\n` + 
            `This space is about my experience as a QA automation\nengineer.\n` +
            `However, if you want to find out more you need\nto play a game... Enjoy!`,
            { fontSize: '20px', fill: '#FFF', lineSpacing: 20 }).setOrigin(0.5)
        const continueText = this.add.text(screenCenterX, 650, `Hit Space to start game`, { fontSize: '32px', fill: '#FFF' }).setOrigin(0.5)
        const mePicture = this.add.image(250, 325, 'me')

        this.input.keyboard.on('keydown-SPACE', (event) => {
            const scenesManager = new ScenesManager()
            scenesManager.stopScene('titleScreen')
            scenesManager.startScene('mainScene')
            this.unregisterKeys()
        })
    }

    update() { }

    unregisterKeys() {
        this.input.keyboard.off('keydown-SPACE')
    }
}