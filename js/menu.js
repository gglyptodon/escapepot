var menuState = {
    timeToWait: globalTimer,
    isStillWaiting: function() {
        console.log("check waiting", localStorage.getItem("escapepot_localstoragetimer"));
        if (localStorage.getItem("escapepot_localstoragetimer") > 0 ) {
            return true;
        }
        else{
            var localStorageTimer = localStorage.getItem("escapepot_localstoragetimer");
            console.log(localStorageTimer, "lcl");
            return false
        }

    },
    startup: function(){

        if (! this.isStillWaiting()){
            localStorage.setItem("escapepot_localstoragetimer",this.timeToWait);
            game.state.start('play');

        }
        else{

            game.state.start('redo');
        }
    },

    create: function(){

        game.stage.backgroundColor = '#555555';

        background = game.add.tileSprite(0, 0, 800, 600, 'backgroundmenu');

        button = game.add.button(game.world.centerX/2, 400, 'buttonmenu', actionOnClick, this, 1, 0, 2);

        button.onInputOver.add(over, this);
        button.onInputOut.add(out, this);
        button.onInputUp.add(this.startup, this);

        var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
        placeholdertext = game.add.text(50,50,"mix a potion,\n click button to start", style);
    }

};
