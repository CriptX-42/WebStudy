var timerId = null; //Variable that stores the function call 'timeout'

function StartGame(){
    var url = window.location.search;
    
    var LevelGame = url.replace("?","");
    

    var SecondsTime = 0;

    if(LevelGame == 1){//1 easy == 120 sec
        SecondsTime = 120;
    }
    if(LevelGame == 2){//2 normal == 60 sec
        SecondsTime = 60;
    }
    if(LevelGame == 3){//3 hard == 30 sec
        SecondsTime = 30;
    }
    
    // inserting seconds in span
    document.getElementById('stopwatch').innerHTML = SecondsTime;

    // amount of balloons
    var amount_balloons = 80;
    create_balloons(amount_balloons);
    //print amount balloon Integers
    document.getElementById('wholeBalloons').innerHTML = amount_balloons;
    document.getElementById('BlownBalloons').innerHTML = 0;

    TimeCounting(SecondsTime + 1);
}
function TimeCounting(seconds){
    seconds = seconds - 1;
    if(seconds == -1){
        clearTimeout(timerId); //for execution of the function 'setTimeout'
        GameOuver();
        return false;
    }

    document.getElementById('stopwatch').innerHTML = seconds;
    timerId = setTimeout("TimeCounting("+seconds+")",1000);

}
function GameOuver(){
    alert('Game ouver');
}
function create_balloons(amount_balloons){
    for(var i = 1; i <= amount_balloons; i++){
        var balloon = document.createElement('img');
        balloon.src = 'image/balao_azul_pequeno.png';
        balloon.style.margin= '10px';
        balloon.id = 'b'+ i;
        balloon.onclick = function(){explode(this);}
        document.getElementById('scenario').appendChild(balloon);
    }
}
function explode(e){
    var id_ballon = e.id;
    document.getElementById(id_ballon).src = 'image/balao_azul_pequeno_estourado.png';
    
    score(-1);
}
function score(action){
    var wholeBalloons = document.getElementById('wholeBalloons').innerHTML;
    var BlownBalloons = document.getElementById('BlownBalloons').innerHTML;

    wholeBalloons = parseInt(wholeBalloons);
    BlownBalloons = parseInt(BlownBalloons);
    
    wholeBalloons = wholeBalloons + action;
    BlownBalloons = BlownBalloons - action;

    document.getElementById('wholeBalloons').innerHTML = wholeBalloons;
    document.getElementById('BlownBalloons').innerHTML = BlownBalloons;

    GameSituation(wholeBalloons);

}
function GameSituation(wholeBalloons){
    if(wholeBalloons ==0 ){
        alert('Congratulations, you were able to finish the game!');
        StopGame();

    }
}
function StopGame(){
    clearTimeout(timerId);
}