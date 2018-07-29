
var config = {
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
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