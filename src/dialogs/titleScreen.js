import Phaser from 'phaser'
import ScenesManager from '../scenesManager';

export default class TitleScreen extends Phaser.Scene {
    preload() {
        this.load.image('me', 'me.png')
    }

    create() {
        const screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
        const screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;
        const introText = this.add.text(815, 260,
            `Hello and a warm welcome to my corner of the internet!\n` + 
            `I'm Michał Marczuk, and I'm thrilled to have you here.\n\n` + 
            `This space is about my experience as a QA automation\nengineer.\n` +
            `However, if you want to find out more you need\nto play a game... Enjoy!`,
            { fontSize: '20px', fill: '#FFF', lineSpacing: 20 }).setOrigin(0.5)
        const continueText = this.add.text(screenCenterX, 650, `Hit Space to start game`, { fontSize: '32px', fill: '#FFF' }).setOrigin(0.5)
        // this.yes = this.add.text(screenCenterX - 50, screenCenterY, `Yes`, { fontSize: '32px', color: '#F00' }).setOrigin(0.5)
        // this.no = this.add.text(screenCenterX + 50, screenCenterY, `No`, { fontSize: '32px', fill: '#FFF' }).setOrigin(0.5)

        this.physics.add.staticGroup().create(250, 325, 'me')

        this.playAgain = true

        this.input.keyboard.on('keydown-SPACE', (event) => {
            if (this.playAgain) {
                const scenesManager = new ScenesManager()
                scenesManager.stopScene('titleScreen')
                scenesManager.startScene('mainScene')
                this.unregisterKeys()
            }
        })

        // this.input.keyboard.on('keydown-LEFT', (event) => {
        //     this.yes.setColor('#F00')
        //     this.no.setColor('#FFF')
        //     this.playAgain = true
        // })

        // this.input.keyboard.on('keydown-RIGHT', (event) => {
        //     this.yes.setColor('#FFF')
        //     this.no.setColor('#F00')
        //     this.playAgain = false
        // })
    }

    update() { }

    unregisterKeys() {
        this.input.keyboard.off('keydown-SPACE')
        // this.input.keyboard.off('keydown-LEFT')
        // this.input.keyboard.off('keydown-RIGHT')
    }
}