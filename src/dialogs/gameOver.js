export default class GameOver {
    constructor(gameState, scene, keys) {
        this.gameState = gameState
        this.scene = scene
        this.keys = keys
    }

    drawElements() {
        this.gameOver = this.scene.add.text(200, 200, `Game Over`, { fontSize: 45, fill: '#FFF' })
        this.yes = this.scene.add.text(300, 250, `Yes`, { fontSize: 32, color: '#F00' })
        this.no = this.scene.add.text(400, 250, `No`, { fontSize: 32, fill: '#FFF' })
    }

    setState() {
        this.gameState.isGameOver = true
        this.gameState.playAgain = true
    }

    show() {
        this.drawElements()
        this.setState()
    }

    update() {
        if (this.keys.left.isDown) {
            this.yes.setColor('#F00')
            this.no.setColor('#FFF')
            this.gameState.playAgain = true
        } else if (this.keys.right.isDown) {
            this.no.setColor('#F00')
            this.yes.setColor('#FFF')
            this.gameState.playAgain = false
        } else if (this.keys.space.isDown) {
            if (this.gameState.playAgain) {
                this.scene.registry.destroy() // destroy registry
                this.scene.events.off() // disable all active events
                this.scene.scene.restart() // restart current scene
            }
            this.yes.destroy()
            this.no.destroy()
            this.gameOver.setFontSize(100)
        }
    }
}