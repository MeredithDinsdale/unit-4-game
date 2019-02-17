

let targetNumber = Math.floor(Math.random() * (121 - 19)) + 19;

let beachDeathArray = ['a surprise tsunami.', 'a giant snapping sea dragon attack.', 'a brutal crab army.',  'an electric eel.', 'being struck by lightning.', 'one thousand jellyfish stings.', 'being mauled by a sealion.', 'a dolphin pulling you underwater and keeping you there.', 'scavenging wild dogs.', 'an attack by sea birds.'];
let jungleDeathArray = ['an attack by a tiger.', 'quicksand.', 'being strangled by vines.', 'being swallowed by a snake.', 'a bit from a giant poisonous spider.', 'being murdered by monkeys.', 'falling into a pit lined with spikes.', 'being absorbed by the jungle. You are now fossilized as a part of the trees, for all eternity.', 'one million bee stings.', 'being consumed alive by wasps.'];
let caveDeathArray = ['a mysterious drowning.', 'being impaled on a stalagmite.', 'being devoured by a cave fish.', 'vanishing into the inky darkness.', 'an attack by giant bats.', 'dissolution in a caustic slime.', 'being crushed in a cave collapse.', 'getting inexplicably lost and starving to death.', 'suffocation when your entry path caves in.'];

let wins = 0;
let losses = 0;
let pointCounter = 0;

let specimen1 = 0;
let specimen2 = 0;
let specimen3 = 0;
let specimen4 = 0;

let image1 = Math.floor(Math.random() * (13 - 2)) + 2;
let image2 = Math.floor(Math.random() * (13 - 2)) + 2;
let image3 = Math.floor(Math.random() * (13 - 2)) + 2;
let image4 = Math.floor(Math.random() * (13 - 2)) + 2;

let path = window.location.pathname;

$("#number-to-guess").text(targetNumber);

$('#specimen1').text(specimen1);
$('#specimen2').text(specimen2);
$('#specimen3').text(specimen3);
$('#specimen4').text(specimen4);

$('#wins').text(wins);
$('#losses').text(losses);
$('#points').text(pointCounter);

console.log('Target Number: ' + targetNumber);
console.log('Image1 is worth ' + image1 + ' points. Image2 is worth: ' + image2 + ' points. Image3 is worth ' + image3 + ' points. Image4 is worth ' + image4 + ' points.');
console.log(window.location.pathname);
console.log('Path: ' + path);

$(document).ready(function() {


  let beachAudioElement = document.createElement("audio");
      beachAudioElement.setAttribute("src", "assets/beachSound.mp3");
      $("#beachButton").on("click", function() {
        beachAudioElement.play();
      });

  let jungleAudioElement = document.createElement("audio");
      jungleAudioElement.setAttribute("src", "assets/jungleSound.mp3");
      $("#jungleButton").on("click", function() {
          jungleAudioElement.play();
   });

  let caveAudioElement = document.createElement("audio");
      caveAudioElement.setAttribute("src", "assets/caveSound.mp3");
      $("#caveButton").on("click", function() {
          caveAudioElement.play();
   });


 
  $("#image1").on("click", function() {
    pointCounter = pointCounter + image1;
    console.log('points: ' + pointCounter);
    $('#points').text(pointCounter);
    specimen1++;
    $('#specimen1').text(specimen1);
    if (pointCounter === targetNumber) {
      winner();
      reset();}
      else if (pointCounter > targetNumber) {
        loser();
        reset();
    }
  });

  $("#image2").on("click", function() {
    pointCounter = pointCounter + image2;
    console.log('points: ' + pointCounter);
    $('#points').text(pointCounter);
    specimen2++;
    $('#specimen2').text(specimen2);
    if (pointCounter === targetNumber) {
      winner();
      reset();}
      else if (pointCounter > targetNumber) {
        loser();
        reset();
    }
  });

  $("#image3").on("click", function() {
    pointCounter = pointCounter + image3;
    console.log('points: ' + pointCounter);
    $('#points').text(pointCounter);
    specimen3++;
    $('#specimen3').text(specimen3);
    if (pointCounter === targetNumber) {
      winner();
      reset();}
      else if (pointCounter > targetNumber) {
        loser();
        reset();
    }
  });

  $("#image4").on("click", function() {
    pointCounter = pointCounter + image4;
    console.log('points: ' + pointCounter);
    $('#points').text(pointCounter);
    specimen4++;
    $('#specimen4').text(specimen4);
    if (pointCounter === targetNumber) {
      winner();
      reset();}
      else if (pointCounter > targetNumber) {
        loser();
        reset();
    }
  });

  
 function winner() {
  alert('You\'ve made it out with your collection and your life intact, congratulations! You can try to collect more specimens here, or scroll to the top for links to the other parts of the island.');
  console.log('You Won!');
  wins++;
 }

 function loser() {
  console.log('You Lost...');
  losses++;
  if (path === '/C:/Users/Meredith/Documents/code/unit-4-game/beach.html') {
    let beachDeath = beachDeathArray[Math.floor(Math.random() * beachDeathArray.length)];
    alert('You have been killed by ' +beachDeath);
  }
  else if (path === '/C:/Users/Meredith/Documents/code/unit-4-game/jungle.html') {
    let jungleDeath = jungleDeathArray[Math.floor(Math.random() * jungleDeathArray.length)];
    alert('You have been killed by ' +jungleDeath);
  }
  else if (path === '/C:/Users/Meredith/Documents/code/unit-4-game/cave.html') {
    let caveDeath = caveDeathArray[Math.floor(Math.random() * caveDeathArray.length)];
    alert('You have been killed by ' +caveDeath);
  }
  }

  function reset() {
    pointCounter = 0;
    specimen1 = 0;
    specimen2 = 0;
    specimen3 = 0;
    specimen4 = 0;
    targetNumber = Math.floor(Math.random() * (121 - 19)) + 19;
    image1 = Math.floor(Math.random() * (13 - 2)) + 2;
    image2 = Math.floor(Math.random() * (13 - 2)) + 2;
    image3 = Math.floor(Math.random() * (13 - 2)) + 2;
    image4 = Math.floor(Math.random() * (13 - 2)) + 2;
    $('#specimen1').text(specimen1);
    $('#specimen2').text(specimen2);
    $('#specimen3').text(specimen3);
    $('#specimen4').text(specimen4);
    $("#number-to-guess").text(targetNumber);
    $('#points').text(pointCounter);
    $('#losses').text(losses);
    $('#wins').text(wins);
    console.log('Target Number: ' + targetNumber);
    console.log('Image1 is worth ' + image1 + ' points. Image2 is worth: ' + image2 + ' points. Image3 is worth ' + image3 + ' points. Image4 is worth ' + image4 + ' points.');
  }
});
