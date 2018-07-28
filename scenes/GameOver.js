class GameOver extends Phaser.Scene {

    constructor() {
        super({key:"GameOver"});
    }
    preload() {
        
    }

    create() {
        this.add.text(this.sys.game.config.width/2 -20, this.sys.game.config.height/2, "Game Over");
    }
}
