import Mushroom from "./mushroom";

export default class DescriptionMushroom extends Mushroom {
    constructor(width, height, x, y, platform, description) {
        super(width, height, x, y, platform)
        this.description = description

        this.createDescription()
    }

    createDescription() {
        const textX = this.x - ((this.mushroomPieceSize + 2) * (this.width / 2))
        const mushroomCalculatedHeight = (this.y - this.mushroomPieceSize * this.height) - this.mushroomPieceSize

        this.scene.add.text(textX, mushroomCalculatedHeight - 85, this.description.company, { fontSize: 19, fill: '#FFF' , stroke: '#F00', strokeThickness: 1})
        this.scene.add.text(textX, mushroomCalculatedHeight - 53, this.description.title, { fontSize: 14, fill: '#FFF' })
        this.scene.add.text(textX, mushroomCalculatedHeight - 33, this.description.period, { fontSize: 14, fill: '#FFF' })
    }
}