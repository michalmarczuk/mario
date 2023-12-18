export default class Teleport {
    constructor(player) {
        this.player = player
    }

    setEntryPoint(entryPointX, entryPointY) {
        this.entryPointX = entryPointX
        this.entryPointY = entryPointY
    }

    setExitPoint(exitPointX, exitPointY) {
        this.exitPointX = exitPointX
        this.exitPointY = exitPointY
    }

    update() {
        if (this.player.body.position.x === this.entryPointX && this.player.body.position.y === this.entryPointY) {
            this.player.body.position.x = this.exitPointX - 10
            this.player.body.position.y = this.exitPointY
        }

        if (this.player.body.position.x === this.exitPointX && this.player.body.position.y === this.exitPointY) {
            this.player.body.position.x = this.entryPointX + 10
            this.player.body.position.y = this.entryPointY
        }
    }
}