export default class Mushroom {
    constructor(width, height, x, y, scene) {
        this.width = width
        this.height = height
        this.x = x
        this.y = y
        this.scene = scene
        this.platform = scene.physics.add.staticGroup()
        this.mushroomPieceSize = 30

        this.createMushroom()
    }

    createMushroom() {
        let currentY = this.y

        for (let y = this.y; y > this.y - this.mushroomPieceSize * this.height; y -= this.mushroomPieceSize) {
            this.platform.create(this.x, y, 'mushroomStipe')
            currentY = y
        }

        this.platform.create(this.x, currentY -= this.mushroomPieceSize, 'mushroomTopStipe')

        let middleOfX = this.x - ( this.width / 2) * this.mushroomPieceSize
        this.platform.create(middleOfX, currentY -= this.mushroomPieceSize, 'mushroomTopLeft')
        this.platform.create(middleOfX + this.mushroomPieceSize * this.width, currentY, 'mushroomTopRight')
        
        for (let x = middleOfX + this.mushroomPieceSize; x < middleOfX + this.mushroomPieceSize * this.width; x += this.mushroomPieceSize) {
            this.platform.create(x, currentY, 'mushroomTopMiddle')
        }
    }
}