import Phaser from 'phaser'
import MarioTextGenerator from '../Tools/marioTextGenerator';

const path = require('path')

export default class Scene extends Phaser.Scene {   
    preload() {
        this.load.image('linkedin_logo', 'linkedin_logo.png')
        this.load.image('run_blog_sh_logo', 'run_blog_sh_logo.png')
        this.load.image('github_logo', 'github_logo.png')
    }

    create(bottomCustomText) {
        this.generateLink('linkedin_logo', 'https://www.linkedin.com/in/michalmarczuk', this.cameras.main.width - 12, 23)
        this.generateLink('github_logo', 'https://github.com/michalmarczuk', this.cameras.main.width - 45, 23)
        this.generateLink('run_blog_sh_logo', 'https://run-blog.sh', this.cameras.main.width - 78, 23)

        MarioTextGenerator.add(2, 10, `www.marczuk.org //Designed by Michał Marczuk ©${new Date().getFullYear()}`, 15, this)
        MarioTextGenerator.add(2, 760, bottomCustomText, 15, this)
    }

    generateLink(imageRef, url, x, y) {
        const link = this.add.sprite(x, y, imageRef).setInteractive()
        link.displayWidth = 25
        link.displayHeight = 25

        link.on('pointerdown', () => window.open(url, "_blank"))
        link.on('pointerover', () => document.querySelector('body').style.cursor = 'pointer')
        link.on('pointerout', () => document.querySelector('body').style.cursor = 'default')
    }

    loadFont(name, file) {
        var newFont = new FontFace(name, file);
        newFont.load().then(function (loaded) {
            document.fonts.add(loaded);
        }).catch(function (error) {
            return error;
        });
    }
}