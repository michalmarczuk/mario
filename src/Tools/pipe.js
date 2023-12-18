export default class Pipe {
    constructor(direction, x, y, solidPlatform, ghostPlatform) {
        this.direction = direction
        this.x = x
        this.y = y
        this.solidPlatform = solidPlatform
        this.ghostPlatform = ghostPlatform

        this.createPipe()
    }

    createPipe() {
        //TODO You can do better than that!
        if (this.direction === 'right') {
            const pipe = this.ghostPlatform.create(this.x, this.y, 'pipeRight')
            pipe.setDepth(2)
            this.solidPlatform.create(this.x, this.y - 28, 'pipeRightTop')
        } else if (this.direction === 'left') {
            const pipe = this.ghostPlatform.create(this.x, this.y, 'pipeLeft')
            pipe.setDepth(2)
            this.solidPlatform.create(this.x, this.y - 28, 'pipeLeftTop')
        } else if (this.direction === 'down') {
            const pipe = this.ghostPlatform.create(this.x, this.y, 'pipeDown')
            pipe.setDepth(2)
        }
    }
}