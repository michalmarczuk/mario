export default class CollidersManager {
    constructor(player, platforms, scene) {
        if (CollidersManager._instance) {
            return CollidersManager._instance
        }
        CollidersManager._instance = this
     
        this.enemies = []
        this.player = player
        this.platforms = platforms
        this.scene = scene

        this.playerPlatformsCollider = scene.physics.add.collider(this.player, this.platforms)
    }

    registerEnemy(enemy) {
        this.scene.physics.add.collider(enemy, this.platforms)
        this.enemies.push({
            id: enemy.getId(),
            collider: this.scene.physics.add.collider(this.player, enemy, someoneGonnaDie, null, this)
        })

        function someoneGonnaDie(player, enemy) {
            if (enemy.body.touching.up && player.body.touching.down) {
                enemy.die()
                this.enemies.find(e => e.id === enemy.getId()).collider.active = false
            } else {
                player.die()
                this.playerPlatformsCollider.active = false

                setTimeout(() => { 
                    player.respawn()
                    this.playerPlatformsCollider.active = true
                }, 3000)
            }
        }
    }

    registerCoin(coin) {
        this.scene.physics.add.collider(coin, this.platforms)
        this.scene.physics.add.collider(this.player, coin, collected, null, this)

        function collected(player, coin) {
            if (coin.body.touching && player.body.touching) {
                coin.collect()
            }
        }
    }

    respawnEnemy(enemy) {
        this.enemies.find(e => e.id === enemy.getId()).collider.active = true
    }

    reset() {
        CollidersManager._instance = null
    }
}