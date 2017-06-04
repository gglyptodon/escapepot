

var playState = {
    create: function(){
        var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
        placeholdertext = game.add.text(50,50,"four potion ingredients and mixing \nforms coming soon...", style);

        button = game.add.button(game.world.centerX/2, 400, 'button', actionOnClick, this, 2, 1, 0);
        button.onInputUp.add(this.submit, this);

        game.add.plugin(PhaserInput.Plugin);
        input = game.add.inputField(10, 150);

    },

    submit: function(){
        // todo, check status of entered data and decide whether to go to redo or win.
        var rnum = Math.random();
        console.log(rnum);
        if (this.are_inputs_valid()){
            game.state.start('win');
        }else{
            game.state.start('redo');
        }
    },

    are_inputs_valid: function(){
        var pass_value = "0b08bd98d279b88859b628cd8c061ae0";
        var hash = CryptoJS.MD5(input.value);
        console.log(hash.toString(), '-is not-', CryptoJS.MD5("win").toString());
        if (hash.toString() == pass_value){
            return(true);
        }else{
            return(false);
        }
    }
};