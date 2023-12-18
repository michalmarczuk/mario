import ScenesManager from '../scenesManager';

export default class SceneTeleport {
    constructor(player, scene) {
        this.player = player
        this.scene = scene
    }

    setEntryPoint(entryPointX, entryPointY) {
        this.entryPointX = entryPointX
        this.entryPointY = entryPointY
    }

    setBackPoint(exitPointX, exitPointY) {
        this.exitPointX = exitPointX
        this.exitPointY = exitPointY
    }

    setDestinationScene(destinationScene) {
        this.destinationScene = destinationScene
    }

    setOriginScene(originScene) {
        this.originScene = originScene
    }

    update() {
        if (this.player.body.position.x === this.entryPointX && this.player.body.position.y === this.entryPointY) {            
            this.player.body.position.x = this.exitPointX
            this.player.body.position.y = this.exitPointY
        
            const scenesManager = new ScenesManager()
            scenesManager.stopScene(this.originScene)
            this.scene.getColliderManager().reset()
            scenesManager.startScene(this.destinationScene)
        }
    }
}
