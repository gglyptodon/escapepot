var timer;
var countdown;
var text;
var redoState = {
  timeToWait: 0.1*30,

  getStorageTimer: function(){
        if (localStorage.getItem("escapepot_localstoragetimer") === 0 || localStorage.getItem("escapepot_localstoragetimer") === undefined) {
            countdown = this.timeToWait;
            localStorage.setItem("escapepot_localstoragetimer", this.timeToWait);
            //console.log("reset localstorage", localStorage.getItem("escapepot_localstoragetimer") )

        }
        else{
            //console.log("local storage was not 0 / undefined", localStorage.getItem("escapepot_localstoragetimer") )
            countdown = localStorage.getItem("escapepot_localstoragetimer");

        }
  },
  update: function(){
      text.setText('Restart in ' + countdown + ' seconds');
      localStorage.setItem("escapepot_localstoragetimer", countdown);

  if (countdown == 0){
      this.displaybutton();
      timer.stop();
      localStorage.setItem("escapepot_localstoragetimer", 0);
      text.setText('Start from scratch...');
  }

  },

  explode: function(){
        console.log("time for an animation");

  },
  displaybutton: function(){
        button = game.add.button(game.world.centerX/2, 400, 'buttonredo', actionOnClick, this, 1, 0, 2);
        button.onInputUp.add(this.backtostart, this);

  },
  backtostart(){
        console.log("back to start");
        game.state.start('menu');
  },
  create: function(){
        timer = game.time.create(false);
        this.getStorageTimer();

        timer.loop(1000, function(){ countdown-- }, this);
        timer.start();

        game.stage.backgroundColor = '#b9c1c9';
        background = game.add.tileSprite(0, (600 - 382)/2, 800, 383, 'backgroundredo');
        text = game.add.text(32, 32, '', { font: "55px Arial", fill: "#000065" });
        var style = { font: "bold 32px Arial", fill: "#000065", boundsAlignH: "center", boundsAlignV: "middle" };

        placeholdertext = game.add.text(50,500,"Oh no, you messed up. You have to clean the\npotions room before you can try again", style);
        this.explode();

  }
};
