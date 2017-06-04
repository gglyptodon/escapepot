var loadState = {
    preload: function(){
        game.load.spritesheet('button', 'assets/btn/todo.png', 150, 50);
        game.load.image('background','assets/img/bg.png');
    },

    create: function(){
        game.state.start('menu');
    }
};