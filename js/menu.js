var menuState = {
    timeToWait: 0.1*60,
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

        background = game.add.tileSprite(0, 0, 800, 600, 'background');

        button = game.add.button(game.world.centerX/2, 400, 'button', actionOnClick, this, 2, 1, 0);

        button.onInputOver.add(over, this);
        button.onInputOut.add(out, this);
        button.onInputUp.add(this.startup, this);

    }

};