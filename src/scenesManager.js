import GameFactory from './Tools/gameFactory'

export default class ScenesManager {
    constructor() {
        if (ScenesManager._instance) {
            return ScenesManager._instance
        }
        
        ScenesManager._instance = this
        this.scenes = []
    }

    registerScene(sceneName, classRef) {
        GameFactory.getGame().scene.add(sceneName, classRef)
        this.scenes.push({
            name: sceneName,
            state: 'added'
        })

        // console.log(`${sceneName} registered`)
    }

    startScene(sceneName) {
        const scene = this.scenes.find(scene => scene.name === sceneName)

        if (scene.state === 'added') {
            GameFactory.getGame().scene.start(sceneName)
        } else if (scene.state === 'stoped') {
            GameFactory.getGame().scene.wake(sceneName)
        }

        // console.log(`${sceneName} ${scene.state} ==> started`)
        scene.state = 'started'
    }

    stopScene(sceneName) {
        const scene = this.scenes.find(scene => scene.name === sceneName)
        
        if (scene.state === 'started') {
            GameFactory.getGame().scene.sleep(sceneName)
        } 

        scene.state = 'stoped'
        // console.log(`${sceneName} ${scene.state}`)
    }
}