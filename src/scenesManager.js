import GameAnalytics from 'gameanalytics'
import GameFactory from './Tools/gameFactory'

export default class ScenesManager {
    constructor() {
        if (ScenesManager._instance) {
            return ScenesManager._instance
        }
        
        ScenesManager._instance = this
        this.scenes = []

        GameAnalytics.GameAnalytics.initialize('50000bbf291fe26f6fa1f442d7d21992', 'e347bb03164046bc4e6bba5e8432adee83600252')
        GameAnalytics.GameAnalytics.setEnabledInfoLog(true)
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

        scene.state = 'started'
        GameAnalytics.GameAnalytics.addProgressionEvent(GameAnalytics.EGAProgressionStatus.Start, sceneName)
    }

    stopScene(sceneName) {
        const scene = this.scenes.find(scene => scene.name === sceneName)
        
        if (scene.state === 'started') {
            GameFactory.getGame().scene.sleep(sceneName)
        } 

        scene.state = 'stoped'
        GameAnalytics.GameAnalytics.addProgressionEvent(GameAnalytics.EGAProgressionStatus.Complete, sceneName)
    }
}