var loadState = {
    preload: function(){
        game.load.spritesheet('button', 'assets/btn/todo.png', 155, 80);
        game.load.spritesheet('buttonredo', 'assets/btn/btn2.png', 155, 80);
        game.load.image('background','assets/img/bg.png');
        game.load.image('backgroundredo','assets/img/bg2.png');
        game.load.image('cw', 'assets/img/cw.png');
        game.load.image('ccw', 'assets/img/ccw.png');
        game.load.image('cw_selec', 'assets/img/cw_selected.png');
        game.load.image('ccw_selec', 'assets/img/ccw_selected.png');
    },

    create: function(){
        game.state.start('menu');

    }
};