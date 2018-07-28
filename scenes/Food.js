class Food extends Phaser.Scene {
    
    init(data) {
        this._data = data;

    }
    constructor() {
        super({key:"Food"});
    }
    preload() {

    }

    create() {
        this.text = this.add.text(200,330,  "What did you have for breakfast? 1 - crap 2 - healthy");
        this.input.keyboard.on('keyup', function(e) {
            if(e.key == "1") {
              
                this.sys.game._data.food = 1
            } else   if(e.key == "2") {
              
              this.sys.game._data.food = 2;
            }

              this.scene.start("MainGame");
        },this);
    }


}