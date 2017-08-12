

var playState = {
    ingredientTxt: [],
    ingredientBtnCW: [],
    ingredientBtnX: [],
    ingredientBtnCCW: [],
    ingredientDir: [],
    ingredientTimes: [],
    resmd5: [],
    numInputs: 4,
    create: function(){
        // so restart works as if from start
        localStorage.setItem("escapepot_localstoragetimer", 0);
        background = game.add.tileSprite(0, 0, 800, 600, 'backgroundplay');

        var style = { font: "bold 16px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
        // headers
        var header_y = 50;
        ingredientHeader = game.add.text(50,header_y,"ingredient", style);
        directionHeader = game.add.text(200, header_y, "stir cw/ccw", style);
        timesHeader = game.add.text(350, header_y, "times to stir (0-9999)", style);

        button = game.add.button(game.world.centerX/2, 450, 'buttonmix', actionOnClick, this, 1, 0, 2);
        button.onInputUp.add(this.submit, this);

        game.add.plugin(PhaserInput.Plugin);

        for (i = 0; i < this.numInputs; i++) {
            var j = i+1;
            var spacing = 90;
            this.ingredientTxt[i] = game.add.inputField(10, spacing*j);
            // button sprite frame numbers on end are over, out, down
            this.ingredientBtnCW[i] = game.add.button(game.world.centerX/2, spacing*j, 'cw', actionOnClick, this, 2, 1, 0);
            this.ingredientBtnCW[i].onInputUp.add(this.toggleCW.bind(this,i), this);

            this.ingredientBtnX[i] = game.add.button(game.world.centerX/2 + 40, spacing*j, 'nomix', actionOnClick, this, 2, 0, 0);
            this.ingredientBtnX[i].onInputUp.add(this.toggleX.bind(this,i), this);


            this.ingredientBtnCCW[i] = game.add.button(game.world.centerX/2 + 80, spacing*j, 'ccw', actionOnClick, this, 2, 1, 0);
            this.ingredientBtnCCW[i].onInputUp.add(this.toggleCCW.bind(this,i), this);

            this.ingredientDir[i] = 2 ; //two stands for not mixing
            this.ingredientTimes[i] =  game.add.inputField(350, spacing*j);
        }

    },
    toggleCW: function(index){
        this.ingredientDir[index] = 0;
        console.log(this.ingredientDir, index);
        // re-color buttons
        this.ingredientBtnCW[index].setFrames(2, 0, 0);
        this.ingredientBtnX[index].setFrames(2, 1, 0);
        this.ingredientBtnCCW[index].setFrames(2, 1, 0);

    },

    toggleCCW: function(index){
        this.ingredientDir[index] = 1;
        this.ingredientBtnCW[index].setFrames(2, 1, 0);
        this.ingredientBtnX[index].setFrames(2, 1, 0);
        this.ingredientBtnCCW[index].setFrames(2, 0, 0);
    },

    toggleX: function(index){
        this.ingredientDir[index] = 2;
        this.ingredientBtnCW[index].setFrames(2, 1, 0);
        this.ingredientBtnX[index].setFrames(2, 0, 0);
        this.ingredientBtnCCW[index].setFrames(2, 1, 0);
    },


    submit: function(){
        if (this.are_inputs_valid()){
            game.state.start('win');
        }else{
            localStorage.setItem("escapepot_localstoragetimer", globalTimer);
            game.state.start('redo');
        }
    },
    clean_input: function(x){
        x = x.toLowerCase();
        x = x.replace(/\s/g, '');
        return x;
    },
    are_inputs_valid: function(){
        var isCorrect = true;
        // set pass values below
        // winning set 
        var pass_vals =["158b941fced3f73107530b88d6c13118", "e4c93f9a422dedc7b0447685870115eb", "1246cd6b39e2026507ce4296bd9f36ae", "b00b60c596a088747e09bda74f1c8c73"];
        // "moon" in upper left and everything else blank / cw for testing
        //var pass_vals = ["464e81449b4c906ba4d8bbc5e0114cbe", "cfcd208495d565ef66e7dff9f98764da", "cfcd208495d565ef66e7dff9f98764da", "cfcd208495d565ef66e7dff9f98764da"];


        var hashed_inputs = [];
        for (i = 0; i < this.numInputs; i++) {
            var cleaned_concatenated = this.clean_input(this.ingredientTxt[i].value+this.ingredientDir[i]+this.ingredientTimes[i].value);
            hashed_inputs[i] = CryptoJS.MD5(cleaned_concatenated).toString();
            this.resmd5[i] = hashed_inputs[i];
            if (hashed_inputs[i].toString() != pass_vals[i]){
                 isCorrect = false
            }
        }
        console.log(this.resmd5);
        return isCorrect;
    }
};
