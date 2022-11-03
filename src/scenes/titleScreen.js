import Phaser from 'phaser'
import Factory from '../factory'

export default class TitleScreen extends Phaser.Scene {
    preload() { }

    create() {
        const screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
        const screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;
        const scoreText = this.add.text(screenCenterX, screenCenterY - 50, `Start Game`, { fontSize: '32px', fill: '#FFF' }).setOrigin(0.5)
        this.yes = this.add.text(screenCenterX - 50, screenCenterY, `Yes`, { fontSize: '32px', color: '#F00' }).setOrigin(0.5)
        this.no = this.add.text(screenCenterX + 50, screenCenterY, `No`, { fontSize: '32px', fill: '#FFF' }).setOrigin(0.5)

        this.playAgain = true

        this.input.keyboard.on('keydown-ENTER', (event) => {
            if (this.playAgain) {
                Factory.getGame().scene.start('game')
                this.unregisterKeys()
            }
        })

        this.input.keyboard.on('keydown-LEFT', (event) => {
            this.yes.setColor('#F00')
            this.no.setColor('#FFF')
            this.playAgain = true
        })

        this.input.keyboard.on('keydown-RIGHT', (event) => {
            this.yes.setColor('#FFF')
            this.no.setColor('#F00')
            this.playAgain = false
        })
    }

    update() { }

    unregisterKeys() {
        this.input.keyboard.off('keydown-ENTER')
        this.input.keyboard.off('keydown-LEFT')
        this.input.keyboard.off('keydown-RIGHT')
    }
}