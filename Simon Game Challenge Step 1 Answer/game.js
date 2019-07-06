
//3. At the top of the game.js file, create a new array called buttonColours and set it to hold the sequence "red", "blue", "green", "yellow" .
var buttonColours  = ["red", "blue", "green", "yellow"];
//5. At the top of the game.js file, create a new empty array called gamePattern.
var gamePattern = [];
//1. Inside game.js create a new function called nextSequence()
// Use jQuery to detect when any of the buttons are clicked and trigger a handler function

// 3. At the top of the game.js file, create a new empty array with the name userClickedPattern.
var userClickedPattern = [];

// ************************************************************************//
var started  = false,
    level = 0;
$(document).keypress(function(event){
    if(!started) {
      // started = true;
      $("#level-title").text("Level " + level);
      nextSequence();
      started = true;

    }
});

// function check answer Firstly, the game shows the first colour in the sequence (blue). The user clicks on the blue button.

// Next, the game shows the next colour (red), the user has to remember the sequence is blue, red and so on and so forth.
function checkAnswer(currentLevel){

      if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      console.log("success");
      // check on the length of the two array
      if (gamePattern.length === userClickedPattern.length){
        setTimeout(function () {
          // call func next sequences
          nextSequence();
        }, 100);
      }
    }
        else {
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function(){
          $("body").removeClass("game-over");
        }, 100);
        $("#level-title").text("Game Over, Press Any Key to Resatrt");
        // To Restart Function
        startOver();
      }


}
// /////////////////////////////////////////////////////////  ///


$(".btn").click(function(){
// 2. Inside the handler, create a new variable called userChosenColour to store the id of the button that got clicked.
//Get value of  attribute id
var userChosenColour  = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  console.log(userClickedPattern);
  // call function playSound any button i click will detect the id ["green","red"."yellow"]
  //var audio =  new Audio("sounds/" + هنا بترجع للفانكشن نفسها مثلا الفانكشن الي انا فيها userChosenColour علشان هيعمل سيلكت لل id + ".mp3");
  // audio.play();
  playSound(userChosenColour);
  animatePress(userChosenColour);
  // make check on the last index take the array length and make check
  checkAnswer(userClickedPattern.length-1);

});


// 2. Create a new function called playSound() that takes a single input parameter called name.


function nextSequence() {
  userClickedPattern = [];
  level ++ ;
  $("#level-title").text("level " +  level);
//2. Inside the new function generate a new random number between 0 and 3, and store it in a variable called randomNumber
  var randomNumber = Math.floor(Math.random() * 3 ) + 1;
//4. Create a new variable called randomChosenColour and use the randomNumber from step 2 to select a random colour from the buttonColours array.
  var randomChosenColour  = buttonColours[randomNumber];
  // console.log(randomChosenColour);
 //6. Add the new randomChosenColour generated in step 4 to the end of the gamePattern.
  gamePattern.push(randomChosenColour);
  // To make Flash after generate random numer
  $("#"+ randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
//4. Refactor the code in playSound() so that it will work for both playing sound in nextSequence() and when the user clicks a button.
   // playSound(randomChosenColour);
}



// Function Play Sound
function playSound(name) {
  var audio = new Audio("sounds/"+ name + ".mp3");
    audio.play();
}
// Function AnimatePress
function animatePress(currentColour){
  $("#" + currentColour).addClass("pressed");
  // after 100 the class removed
  setTimeout(function(){
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}



// 1. Create a new function called startOver().

function startOver() {
  gamePattern = [];
  level = 0;
  started = false;

}
nextSequence();
