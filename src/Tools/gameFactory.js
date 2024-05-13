import Phaser from 'phaser'
import BBCodeTextPlugin from 'phaser3-rex-plugins/plugins/bbcodetext-plugin.js';

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
        },
        plugins: {
            global: [
                {
                    key: 'rexBBCodeTextPlugin',
                    plugin: BBCodeTextPlugin,
                    start: true
                },
            ]
        }
    })

    static getGame() {
        return this.game;
    }
}