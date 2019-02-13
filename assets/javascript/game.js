
//global variables-----------------------------------------------------


let targetNumber = Math.floor(Math.random() * (121 - 19)) + 19;
console.log('Target Number: ' + targetNumber);
$("#number-to-guess").text(targetNumber);

let wins = losses = points = 0
let pointOptions = Math.floor(Math.random() * (13 - 1)) + 1;

for (var i = 0; i < numberOptions.length; i++) {
    let imageCrystal = $("<img>");
    imageCrystal.addClass("specimens");
    imageCrystal.attr("src", "");
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);
    $(".crystal-image").on("click", function() {
        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);
        points += crystalValue;
        document.getElementById("points").innerHTML = points;

// var audioElement = document.createElement("audio");
//     audioElement.setAttribute("src", "assets/javascript/Twinkle-sound-effect.mp3");

$(document).ready(function() {
//onKey event triggerred when user presses letter key ---------------------------------------------------------------------

    document.onkeyup=function(event) {
        var userGuess = event.key.toUpperCase();
        console.log('User guess: ' + userGuess);
        if (Alphanumeric(event.key)){ 
            document.getElementById("message").innerHTML ="";
            crystalBall.animate({ opacity: "0" }, 1000);
//If user wins-------------------------------------------------------------------------------------------------------------      
        if (points === targetNumber) {
            wins +=1;
            console.log('Number of wins: ' + wins);
            document.getElementById("message").innerHTML ="<h5>You win!</h5>";
            points = 0;
            targetNumber = [Math.floor(Math.random() * 120)];
            console.log('Target Number: ' + targetNumber);
            }
//If points go over the target number----------------------------------------------------------------------------------------------------
            
        else if (points > targetNumber) {
            document.getElementById("message").innerHTML ="<h5>You Lost</h5>";
            losses +=1;
            points = 0;
            targetNumber = [Math.floor(Math.random() * 120)];
            console.log('Target Number: ' + targetNumber);
            console.log('Number of losses: ' + losses);
        }
    }
document.getElementById("win").innerHTML = 'Wins: ' + wins;
document.getElementById("loss").innerHTML = 'Losses: ' + losses;
}
  


//functions---------------------------------------------------------
  
   
});   



