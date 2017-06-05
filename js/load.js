var loadState = {
    preload: function(){
        game.load.spritesheet('buttonmenu', 'assets/btn/button_menu.png', 96, 32);
        game.load.spritesheet('buttonredo', 'assets/btn/button_redo.png', 96, 32);
        game.load.spritesheet('buttonrestart', 'assets/btn/button_restart.png', 96, 32);
        game.load.spritesheet('buttonmix', 'assets/btn/button_mix.png', 96, 32);
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