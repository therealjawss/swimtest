class Splash extends Phaser.Scene {

    constructor() {
        super({key:"Splash"});
    }
    preload() {
        this.load.image('splash', 'assets/splash.jpg')

    }

    create() {
        this.text = this.add.text(200,300,  "THis is the splash Screen. Press 1 to start.");
   
        this.input.keyboard.on('keyup', function(e) {
            if(e.key == "1") {
                this.scene.start("Time");

            }
        },this);
    }
}
