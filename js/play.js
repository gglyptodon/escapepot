

var playState = {
    create: function(){
        var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
        placeholdertext = game.add.text(50,50,"four potion ingredients and mixing \nforms coming soon...", style);

        button = game.add.button(game.world.centerX/2, 400, 'button', actionOnClick, this, 2, 1, 0);
        button.onInputUp.add(this.submit, this);
    },

    submit: function(){
        // todo, check status of entered data and decide whether to go to redo or win.
        var rnum = Math.random();
        console.log(rnum);
        if (rnum > 0.5){
            game.state.start('win');
        }else{
            game.state.start('redo');
        }
    }
};