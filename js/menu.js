var menuState = {

    startup: function(){
        console.log('play here...');
        game.state.start('play');
    },

    create: function(){
        game.stage.backgroundColor = '#555555';

        background = game.add.tileSprite(0, 0, 800, 600, 'background');

        button = game.add.button(game.world.centerX/2, 400, 'button', actionOnClick, this, 2, 1, 0);

        button.onInputOver.add(over, this);
        button.onInputOut.add(out, this);
        button.onInputUp.add(this.startup, this);

    }

};