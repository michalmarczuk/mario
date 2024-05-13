import DescriptionMushroom from "../Tools/descriptionMushroom"
import Pipe from "../Tools/pipe"

export default class ExperiencePlatform {
    constructor(scene) {
        scene.cameras.main.setBackgroundColor('#FF0000')
        this.solidPlatforms = scene.physics.add.staticGroup()
        this.ghostPlatforms = scene.physics.add.staticGroup()

        this.canvasWidth = scene.game.canvas.width
        this.canvasHeight = scene.game.canvas.height

        this.solidPlatforms.create(600, 400, 'backgroundBlue')

        for (let i = 0; i <= this.canvasWidth; i+= 32) {
            this.solidPlatforms.create(i, (this.canvasHeight - 66), 'brick')
        }

        // Pipes
        new Pipe('left', 1170, 692, this.solidPlatforms, this.ghostPlatforms)

        new DescriptionMushroom(5, 4, 120, 703, scene, {
            company: 'mmarczuk://',
            title: 'QA Engineer',
            period: 'Jul 2022 - Present'
        })

        new DescriptionMushroom(6, 9, 250, 703, scene, {
            company: 'Opera Software',
            title: 'System Engineer',
            period: 'Jul 2021 - Jul 2022'
        })

        new DescriptionMushroom(8, 14, 380, 703, scene, {
            company: 'Rockwell Automation',
            title: 'Senior Software Test Engineer',
            period: 'Nov 2019 - Jul 2021'
        })

        new DescriptionMushroom(7, 6, 530, 703, scene, {
            company: 'Global App Testing',
            title: 'QAOps Engineer',
            period: 'Feb 2019 - Oct 2019'
        })

        new DescriptionMushroom(6, 11, 680, 703, scene, {
            company: 'Workfront',
            title: 'QA Automation Engineer',
            period: 'Jan 2016 - Jan 2019'
        })

        new DescriptionMushroom(5, 4, 820, 703, scene, {
            company: 'Deltavista',
            title: 'Software Tester',
            period: 'Mar 2014 - Dec 2015'
        })

        new DescriptionMushroom(5, 15, 950, 703, scene, {
            company: 'hurra.com',
            title: 'Software Tester',
            period: 'Feb 2012 - Jan 2014'
        })

        new DescriptionMushroom(5, 7, 1100, 703, scene, {
            company: 'LexisNexis',
            title: 'Software Tester',
            period: 'Sep 2010 - Jan 2012'
        })
    }

    static preload(scene) {
        scene.load.image('backgroundBlue', 'background_blue.png')
        scene.load.image('brick', 'brick.png')
        scene.load.image('pipeLeftTop', 'pipe_left_top.png')
        scene.load.image('pipeLeft', 'pipe_left.png')
        scene.load.image('mushroomTopLeft', 'mushroom_top_left.png')
        scene.load.image('mushroomTopMiddle', 'mushroom_top_middle.png')
        scene.load.image('mushroomTopRight', 'mushroom_top_right.png')
        scene.load.image('mushroomTopStipe', 'mushroom_top_stipe.png')
        scene.load.image('mushroomStipe', 'mushroom_stipe.png')
    }

    getPlatforms() {
        return this.solidPlatforms
    }
}