window.onload = function(){
    var btns = document.getElementsByClassName('btns');
    
    var btn = [];
    for(var i = 1; i < 23; i++){
        btn[i] = document.createElement('button');
        if(i < 10){
            btn[i].innerHTML = i;
        }//if statement
        
        btns[0].append(btn[i]);
        
        btn[i].onclick = function(){
           var num = this.innerHTML;
           var scr = document.getElementsByClassName('scr')[0];
           scr.append((num !== '='? num : ''));
           if(num === 'C'){scr.innerHTML = ""}
           else if(num === '='){scr.innerHTML = eval(scr.innerHTML)}

        }
        
    }//for loop
    
    btn[10].innerHTML = ".";
    btn[11].innerHTML = "0";
    btn[12].innerHTML = "%";
    btn[13].innerHTML = "/";
    btn[14].innerHTML = "*";
    btn[15].innerHTML = "-";
    btn[16].innerHTML = "=";
    btn[17].innerHTML = "C";
    btn[18].innerHTML = "+";
    btn[19].innerHTML = "sin";
    btn[20].innerHTML = "cos";
    btn[21].innerHTML = "tan";
    btn[22].innerHTML = "per";

    btn[19].onclick=function(){
        var scr = document.getElementsByClassName('scr')[0];
        scr.innerHTML=Math.sin((scr.innerHTML* Math.PI) / 180.0).toFixed(2);    
    }

    btn[20].onclick=function(){
        var scr = document.getElementsByClassName('scr')[0];
        scr.innerHTML=Math.cos((scr.innerHTML* Math.PI) / 180.0).toFixed(2);    
    }

    btn[21].onclick=function(){
        var scr = document.getElementsByClassName('scr')[0];
        scr.innerHTML=Math.tan((scr.innerHTML* Math.PI) / 180.0).toFixed(2);    
    }

    btn[22].onclick=function(){
        var scr = document.getElementsByClassName('scr')[0];
        scr.innerHTML=(scr.innerHTML/100).toFixed(2);
    }
    
    }//doc load