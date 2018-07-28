class Time extends Phaser.Scene {
    
    constructor() {
        super({key:"Time"});
    }
    preload() {

    }

    create() {
        this.text = this.add.text(200,330,  "What Time did you sleep last night? 1 - late  2 - early");

        
        this.input.keyboard.on('keyup', function(e) {
            if(e.key == "1") {
              
                this.sys.game._data = {time:1};
            } else   if(e.key == "2") {
              
              this.sys.game._data = {time:2};
            }

              this.scene.start("Food", this._data);
        },this);
    }


}