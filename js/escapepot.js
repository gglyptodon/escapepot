var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create });
function preload() {

    game.load.spritesheet('button', 'assets/btn/todo.png', 155, 80);
    game.load.image('background','assets/img/bg.png');

}
var button;
var background;

function create() {

    game.stage.backgroundColor = '#555555';

    background = game.add.tileSprite(0, 0, 800, 600, 'background');

    button = game.add.button(game.world.centerX/2, 400, 'button', actionOnClick, this, 2, 1, 0);

    button.onInputOver.add(over, this);
    button.onInputOut.add(out, this);
    button.onInputUp.add(up, this);

}

function up() {
    //todo
}

function over() {
    //todo
}

function out() {
    //todo
}

function actionOnClick () {

    //todo
}

