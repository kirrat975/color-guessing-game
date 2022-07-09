
        var nocs = 6;
        var newclr = genranclr(nocs);
        var clrbox = document.querySelectorAll(".colbox");
        var selectclr =ranclrgrn();
        var hexcode = document.querySelector("#hexc");
        var result = document.querySelector("#play");
        var rebtn = document.querySelector("#gc");
        var hd=document.getElementsByClassName(".head");

       
    
        
    //function to generate new colors
    function genplay()
    {
        newclr = genranclr(nocs);
        selectclr =ranclrgrn();
        hexcode.textContent =  "HEXCODE = " + selectclr;
        rebtn.textContent = "Generate New Colors";
        result.textContent = "";
        
        for(var i = 0; i < clrbox.length; i++){
            clrbox[i].style.backgroundColor = newclr[i];
        }

        }
        // code for user to select same color as randomly generated hex code
        hexcode.textContent = "HEXCODE = " + selectclr;
        for(var i = 0; i < clrbox.length; i++) {
        clrbox[i].style.backgroundColor = newclr[i];
        clrbox[i].addEventListener("click", function(){
            
            var chclr = this.style.backgroundColor;
        
            console.log(rgbToHex(chclr), selectclr);
            if(rgbToHex(chclr) === selectclr){
                result.textContent = "Winner!";
                result.style.color=selectclr;
                rebtn.textContent = "Want To Play Again?";
                changenewclr(rgbToHex(chclr));
                hexcode.style.background = rgbToHex(chclr);
            }	else {
                this.style.backgroundColor = "black";
                result.textContent = "Looser!!";
            }
            });
        }
        // function to chnage background color of circles to 
        //matched color
        function changenewclr(clrs){
        for(var i = 0; i < clrbox.length; i++){
            clrbox[i].style.background = clrs;
        }	
        }

        function ranclrgrn(){
    
        var random = Math.floor(Math.random() * newclr.length)
        return newclr[random];
        }

        function genranclr(genclr){
    
        var arr = []
        
        for(var i = 0; i < genclr; i++){
            arr.push(randomColor())
        }
        return arr;
        }
        //function to generate randon hex color codes
        function randomColor(){
            var hex = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F' ];
    var hexColor = "";
    for (var i = 0; i < 6; i++) {
        hexColor += hex[Math.floor(Math.random() * 16)];
    }
    return "#"+hexColor;
        }
        //function to change rgb to hex
        function rgbToHex(col) {
        if(col.charAt(0) == 'r')
        {
        col = col.replace('rgb(','').replace(')','').split(',');
        var r = parseInt(col[0], 10).toString(16);
        var g = parseInt(col[1], 10).toString(16);
        var b = parseInt(col[2], 10).toString(16);
        r = r.length == 1 ? '0' + r : r;
        g = g.length == 1 ? '0' + g : g;
        b = b.length == 1 ? '0' + b : b;
        var colHex = '#' + r + g + b;
        return colHex.toUpperCase();
        }
    }

    