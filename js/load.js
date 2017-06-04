var loadState = {
    preload: function(){
        game.load.spritesheet('button', 'assets/btn/todo.png', 155, 80);
        game.load.spritesheet('buttonredo', 'assets/btn/btn2.png', 155, 80);
        game.load.image('background','assets/img/bg.png');
        game.load.image('backgroundredo','assets/img/bg2.png');
        game.load.spritesheet('cw', 'assets/btn/cw.png', 32, 32);
        game.load.spritesheet('ccw', 'assets/btn/ccw.png', 32, 32);
//        game.load.image('cw_selec', 'assets/img/cw_selected.png');
//        game.load.image('ccw_selec', 'assets/img/ccw_selected.png');
    },

    create: function(){
        game.state.start('menu');

    }
};