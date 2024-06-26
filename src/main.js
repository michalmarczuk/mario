import EducationAndCertificatesScene from './scenes/educationAndCertificatesScene'
import ExperienceScene from './scenes/experienceScene'
import MainScene from './scenes/mainScene'
import SkillsScene from './scenes/skillsScene'
import HelloScene from './scenes/helloScene'
import ScenesManager from './scenesManager'
import GameFactory from './Tools/gameFactory'

const game = GameFactory.getGame()

const scenesManager = new ScenesManager()
// scenesManager.registerScene('titleScreen', TitleScreen)
scenesManager.registerScene('helloScene', HelloScene)
scenesManager.registerScene('mainScene', MainScene)
scenesManager.registerScene('experienceScene', ExperienceScene)
scenesManager.registerScene('educationAndCertificatesScene', EducationAndCertificatesScene)
scenesManager.registerScene('skillsScene', SkillsScene)

scenesManager.startScene('helloScene')
// scenesManager.startScene('titleScreen')
// scenesManager.startScene('experienceScene')
// scenesManager.startScene('educationAndCertificatesScene')
// scenesManager.startScene('skillsScene', SkillsScene)
