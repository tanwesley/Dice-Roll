// Javascript for dice game app

function rollDice(){
    var die = document.getElementById("die");
    var status = document.getElementById("status");
    var d = Math.round(Math.random()*5) + 1;
    die.innerHTML = d;
}