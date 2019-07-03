var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6
var randomDiceImage = "dice" + randomNumber1 + ".png"; // generate random image from (dice1 - dice6)

var randomeImageSource = "images/" + randomDiceImage; // images/ (png1 - png6)

 document.querySelectorAll("img")[0].setAttribute("src", randomeImageSource); //every time set or change the src attribute with random image


var randomNumber2 = Math.floor(Math.random() * 6 ) + 1;
var randomeImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src",randomeImageSource2);
// if condition to compare if palyer 1 > palyer 2 when generating number
if (randomNumber1  > randomNumber2) {
  document.querySelector("h1").innerHTML = "player1 Win 🚩";

}
else if(randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "player2 Win 🚩";

}
else{
  document.querySelector("h1").innerHTML = " Draws!";

}
