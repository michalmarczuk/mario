import Phaser from 'phaser'
const path = require('path')

export default class Scene extends Phaser.Scene {   
    preload() {
        this.load.image('linkedin_logo', 'linkedin_logo.png')
        this.load.image('run_blog_sh_logo', 'run_blog_sh_logo.png')
        this.load.image('github_logo', 'github_logo.png')
    }

    create() {
        this.generateLink('linkedin_logo', 'https://www.linkedin.com/in/michalmarczuk', this.cameras.main.width - 12, 26)
        this.generateLink('github_logo', 'https://github.com/michalmarczuk', this.cameras.main.width - 45, 26)
        this.generateLink('run_blog_sh_logo', 'https://run-blog.sh', this.cameras.main.width - 78, 26)
    }

    generateLink(imageRef, url, x, y) {
        const link = this.add.sprite(x, y, imageRef).setInteractive()
        link.displayWidth = 25
        link.displayHeight = 25

        link.on('pointerdown', () => window.open(url, "_blank"))
        link.on('pointerover', () => document.querySelector('body').style.cursor = 'pointer')
        link.on('pointerout', () => document.querySelector('body').style.cursor = 'default')
    }
}