var start = document.getElementById("start");
var brek = document.getElementById("break");
var reset = document.getElementById("reset");
var x;
var audio = new Audio('http://www.freesfx.co.uk/rx2/mp3s/2/13651_1459784563.mp3');

start.onclick = function(){
    clearInterval(x);
    var num = document.getElementById("num").value;
    var min = num;
    var sec = 00;
    x = setInterval(function(){
        document.getElementById("timer").innerHTML = min + ":" + sec;
        sec--;
        if(sec == -1){
            min--;
            sec = 59;
        }
        if (min == -1 && sec == 59){
            document.getElementById("timer").innerHTML = "0:0";
            clearInterval(x);
            audio.play();
        }
    },1000);
}
brek.onclick = function(){
    clearInterval(x);
    var numB = document.getElementById("numB").value;
    var min = numB;
    var sec = 00;
    x = setInterval(function(){
        document.getElementById("timer").innerHTML = min + ":" + sec;
        sec--;
        if(sec == -1){
            min--;
            sec = 59;
        }
        if (min == -1 && sec == 59){
            document.getElementById("timer").innerHTML = "0:0";
            clearInterval(x);
            audio.play();
        }
    },1000);
}
reset.onclick = function(){
   clearInterval(x);
   document.getElementById("timer").innerHTML = "00:00";
   min = 1;
   sec = 59;
}