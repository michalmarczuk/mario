export default class GameState {
    constructor() {
        this.isGameOver = false
        this.playAgain = false
    }

    get isGameOver() {
        return this._isGameOver;
    }

    get playAgain() {
        return this._playAgain;
    }

    set isGameOver(isGameOver) {
        this._isGameOver = isGameOver;
    }

    set playAgain(playAgain) {
        this._playAgain = playAgain;
    }
}