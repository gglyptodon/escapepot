var loadState = {
    preload: function(){
        game.load.spritesheet('button', 'assets/btn/todo.png', 155, 80);
        game.load.spritesheet('buttonredo', 'assets/btn/btn2.png', 155, 80);
        game.load.image('background','assets/img/bg.png');
        game.load.image('backgroundredo','assets/img/bg2.png');
    },

    create: function(){
        game.state.start('menu');

    }
};