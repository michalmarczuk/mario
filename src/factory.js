import Phaser from 'phaser'

export default class Factory {
    static game = new Phaser.Game({
        type: Phaser.AUTO,
        width: 1200,
        height: 800,
        physics: {
            default: 'arcade',
            arcade: {
                gravity: {
                    y: 30,
                },
                debug: false
            }
        }
    })

    static getGame() {
        return this.game;
    }
}