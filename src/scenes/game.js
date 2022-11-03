import Phaser from 'phaser'
import GameOver from '../dialogs/gameOver';
import GameState from '../gameState';
import Bricks from '../platforms/bricks';
import Dude from '../sprites/dude'
import Mario from '../sprites/mario';
const path = require('path');

export default class Game extends Phaser.Scene {    
    preload() {
        this.load.image('background', 'background.png')
        this.load.image('cloud1', 'cloud1.png')
        this.load.image('cloud2', 'cloud2.png')
        this.load.image('pipe', 'pipe.png')
        this.load.image('star', 'star.png')
        this.load.image('bomb', 'bomb.png')

        Mario.preload(this)
        Bricks.preload(this)

        this.load.spritesheet('stinker',
        'stinker.png',
        { frameWidth: 25, frameHeight: 25 }
    )
    }

    create() {
        this.cursors = this.input.keyboard.createCursorKeys()
        this.gameState = new GameState()
        this.gameOver = new GameOver(this.gameState, this, this.cursors)
        this.canvasWidth = this.sys.game.canvas.width
        this.canvasHeight = this.sys.game.canvas.height

        this.add.image(600, 300, 'background')
        this.add.image(400, 50, 'cloud1')
        this.add.image(900, 150, 'cloud2')

        const bricks = new Bricks(this)

        this.player = new Mario(this, this.gameState)
        this.physics.add.collider(this.player, bricks.getPlatforms())

        //enemy test
        this.pipe = this.physics.add.staticGroup()
        this.pipe.create(450, 254, 'pipe')

        this.enemyTest = this.add.sprite(10, 10, 'stinker')
        this.physics.add.existing(this.enemyTest)

        this.enemyTest.body.setBounceX(1)
        this.enemyTest.body.setGravityY(500)

        this.physics.add.collider(this.enemyTest, bricks.getPlatforms())
        this.physics.add.collider(this.enemyTest, this.pipe)
        this.physics.add.collider(this.player, this.pipe)
        this.physics.add.collider(this.player, this.enemyTest, marioDies, null, this)

        this.anims.create({
            key: 'go',
            frames: this.anims.generateFrameNumbers('stinker', { start: 0, end: 2 }),
            frameRate: 10,
            repeat: -1
        })
        this.enemyTest.play('go')

        this.time.delayedCall(1000, touchGround, [this.enemyTest], this);

        function touchGround(enemyTest) {
            enemyTest.body.setVelocityX(40)
        }

        function marioDies(player, enemyTest) {
            //enemy test
            if (enemyTest.body.touching.up && player.body.touching.down) {
                console.log('Hello')
            } else {
                console.log('Die Mario!')
            }
        }

        //enemy test

        //BOMB 
        const bombs = this.physics.add.group()
        this.physics.add.collider(bombs, bricks.getPlatforms())
        this.physics.add.collider(this.player, bombs, hitBomb, null, this)

        function hitBomb (player, bomb){
            this.physics.pause()
            player.setTint(0xff0000)
            bomb.setTint(0xff0000)
            player.anims.play('turn')
            
            this.gameOver.show()
        }

        //SCORE
        let score = 0
        const scoreText = this.add.text(16, 16, `score: ${score}`, { fontSize: 32, fill: '#000' })

        // STARS
        const stars = this.physics.add.group({
            key: 'star',
            repeat: 11,
            setXY: { x: 12, y: 0, stepX: 70 }
        })
        
        stars.children.iterate(function (child) {
            child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8))
        })

        this.physics.add.collider(stars, bricks.getPlatforms())
        this.physics.add.overlap(this.player, stars, collectStar, null, this)
        
        function collectStar (player, star) {
            star.disableBody(true, true)

            score += 10;
            scoreText.setText('Score: ' + score);
        
            if (stars.countActive(true) === 0)
            {
                stars.children.iterate(function (child) {
                    child.enableBody(true, child.x, 0, true, true);
                });
        
                let x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400)
        
                let bomb = bombs.create(x, 16, 'bomb')
                bomb.setBounce(1)
                bomb.setCollideWorldBounds(true)
                bomb.setVelocity(Phaser.Math.Between(-200, 200), 20)
            }
        }
    }

    update() {
        if (this.gameState.isGameOver) {
            this.gameOver.update()            
        } else {
            this.player.update(this.cursors)
        }
    }
}