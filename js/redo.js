var timer; var countdown;
var text;
var redoState = {
  update: function(){
      text.setText('Restart in ' + countdown.toFixed(0) + ' seconds');

  if (countdown == 0){
      this.displaybutton();
      timer.stop();
      text.setText('Start from scratch...');
  }

  },

  explode: function(){
        console.log("time for an animation");

  },
  displaybutton: function(){
        button = game.add.button(game.world.centerX/2, 400, 'buttonredo', actionOnClick, this, 2, 1, 0);
        button.onInputUp.add(this.backtostart, this);

  },
  backtostart(){
        console.log("back to start");
        game.state.start('menu');
  },
  create: function(){
        timer = game.time.create(false);
        countdown  = 0.1 * 60;

        timer.loop(1000, function(){ countdown-- }, this);
        timer.start();

        game.stage.backgroundColor = '#555555';
        background = game.add.tileSprite(0, 0, 800, 600, 'backgroundredo');
        text = game.add.text(32, 32, 'fucking text', { font: "55px Arial", fill: "#000065" });
        this.explode();





  }
};