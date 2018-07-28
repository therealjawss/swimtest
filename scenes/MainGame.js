var strokeCountdown = 5;
var scoreText;
var countdownText;
class MainGame extends Phaser.Scene {


    init(data) {
        this._data = data;

    }
    constructor() {
        super({key:"MainGame"});
    }
    preload() {
        this.load.image('water','assets/water.png');
        this.load.spritesheet('dude', 'assets/dude.png',
         {frameWidth: 32, frameHeight: 48 });

    }

    create() {
        this.add.image(400,300, 'water');
        this.text = this.add.text(200,330,  "this is the Main Game" + "time: " + this.sys.game._data.time + " food: "+ this.sys.game._data.food);
        //scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000'});
        countdownText = this.add.text(16, 16, 'score: '+strokeCountdown, { fontSize: '32px', fill: '#000'});
        this.player = this.physics.add.sprite(100, 450, 'dude');
        this.player.speed = this.sys.game._data.time * this.sys.game._data.food * 10;
        this.player.setBounce(0.2);
        this.player.setCollideWorldBounds(true);

        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers(
                'dude',
                {start: 0, end: 3 }
            ),
            frameRate: 10,
            repeat: -1
            
        });
        this.anims.create({
            key: 'turn',
            frames: [ {key: 'dude', frame: 4}],
            frameRate: 20
        });

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('dude', {start: 5, end:8}),
            frameRate: 10,
            repeat: -1
        });
      //  player.anims.play('left');
        cursors = this.input.keyboard.createCursorKeys();
    }

    update() {
 
         //   console.log(this.input.activePointer.isUp + 'oi');
        strokeCountdown--;
        if (strokeCountdown<0) strokeCountdown = 60;
        countdownText.setText(Math.floor(strokeCountdown/10));
        if (this.input.activePointer.isDown && strokeCountdown==0) {
            console.log(this.input.activePointer.msSinceLastClick ) 
            this.player.anims.play('left', true);
            this.tweens.add({
                targets: this.player,
                y: this.player.y -this.player.speed,
                duration: 500,
                ease: function (t) {
                    return Math.pow(t, 3);
                },
                delay: 1,
                onComplete: (tween, targets, myImage)=> {
                    this.player.y-=this.player.speed;
                }
             });
          //  this.player.y-=this.player.speed;

        } else {
            this.player.setVelocityX(0);
            this.player.anims.play('turn')
        }

        if (this.player.y < 50) {

            this.scene.start("GameOver")
        }

    }
}
