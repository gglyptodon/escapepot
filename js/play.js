

var playState = {
    ingredientTxt: [],
    ingredientBtnCW: [],
    ingredientBtnCCW: [],
    ingredientDir: [],
    ingredientTimes: [],
    resmd5: [],
    numInputs: 4,
    create: function(){
        var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
        placeholdertext = game.add.text(50,50,"four potion ingredients and mixing \nforms coming soon...", style);

        button = game.add.button(game.world.centerX/2, 400, 'button', actionOnClick, this, 2, 1, 0);
        button.onInputUp.add(this.submit, this);

        game.add.plugin(PhaserInput.Plugin);

        for (i = 0; i < this.numInputs; i++) {
            var j = i+1;
            var spacing = 90;
            this.ingredientTxt[i] = game.add.inputField(10, spacing*j);
            this.ingredientBtnCW[i] = game.add.button(game.world.centerX/2, spacing*j, 'cw', actionOnClick, this, 2, 1, 0);
            this.ingredientBtnCCW[i] = game.add.button(game.world.centerX/2+50, spacing*j, 'ccw', actionOnClick, this, 2, 1, 0);
            this.ingredientDir[i] = 0 ;//todo set to 0 for cw, 1 for ccw
            this.ingredientTimes[i] =  game.add.inputField(350, spacing*j);


        }


        //game.add.plugin(PhaserInput.Plugin);
        //input = game.add.inputField(10, 150);

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
        var isCorrect = true;

        var pass_vals =  ["b01b321b66287166bd1552f21a04d8bd", "0b7694d01b81335a241c115c40c033ca", "d39bc8d3d15d9a9000d1ec7c6987eeee", "fb7a1dc716a04f7082894df494e0d0fa"]
         //i1...item4
        var pass_times = [1,2,3,4];

        var hashed_inputs = [];
        for (i = 0; i < this.numInputs; i++) {
            hashed_inputs[i] = CryptoJS.MD5(this.ingredientTxt[i].value+this.ingredientDir[i]+this.ingredientTimes[i].value).toString(); //todo ingrDir to 0 for cw, 1 ccw
            this.resmd5[i] = hashed_inputs[i];
            console.log(this.resmd5[i]);
            if (hashed_inputs[i].toString() != pass_vals[i]){
                 isCorrect = false
            }
        }
        console.log(this.resmd5);
        return isCorrect;
       //var pass_value = "0b08bd98d279b88859b628cd8c061ae0";

       // var hash = CryptoJS.MD5(input.value);
       // console.log(hash.toString(), '-is not-', CryptoJS.MD5("win").toString());
       // if (hash.toString() == pass_value){
       //     return(true);
       // }else{
       //     return(false);
       // }
    }
};