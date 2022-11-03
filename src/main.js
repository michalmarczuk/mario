import TitleScreen from './scenes/titleScreen'
import Game from './scenes/game'
import Factory from './factory'

const game = Factory.getGame()
game.scene.add('titleScreen', TitleScreen)
game.scene.add('game', Game)

game.scene.start('titleScreen')
// game.scene.start('game')
