
var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0}
        }

    }, 
   // scene: [ Splash , Time, Food, MainGame, GameOver]
    scene:[MainGame]

};
var player;
var cursors;
var animations;
var game = new Phaser.Game(config); 