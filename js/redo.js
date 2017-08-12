var timer;
var countdown;
var text;
var redoState = {
  timeToWait: globalTimer,
  override: '',
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
  passtostart(){
        console.log('pass to start');
        pwmd5 = CryptoJS.MD5(this.override.value).toString();
        if (pwmd5 == "5bf31c83bbc3f287fa3ebef696149bb8"){
            localStorage.setItem("escapepot_localstoragetimer", 0);
            this.backtostart();
        }
        console.log(pwmd5);
  },
  create: function(){
        game.add.plugin(PhaserInput.Plugin);

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
        this.override = game.add.inputField(game.world.width - 200, game.world.height - 20);
        button = game.add.button(game.world.width - 40, game.world.height - 20, 'buttonoverride', actionOnClick, this, 1, 0, 2);
        button.onInputUp.add(this.passtostart, this);
  }
};
