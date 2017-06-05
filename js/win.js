var winState = {
    create: function(){
        var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
        placeholdertext = game.add.text(50,50,"Whaaa?? you mixed your\npotion correctly\nsomething exciting happens\n and you're free", style);

        button = game.add.button(game.world.centerX/2, 400, 'buttonrestart', actionOnClick, this, 1, 0, 2);
        button.onInputUp.add(this.backtostart, this);
    },

    backtostart: function(){
        game.state.start('menu');
    }

};