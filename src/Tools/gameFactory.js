import Phaser from 'phaser'

export default class GameFactory {
    static game = new Phaser.Game({
        // type: Phaser.AUTO,
        width: 1200,
        height: 800,
        scale: {
            // Fit to window
            mode: Phaser.Scale.FIT,
            // Center vertically and horizontally
            autoCenter: Phaser.Scale.CENTER_BOTH
        },
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