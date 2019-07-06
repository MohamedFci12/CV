//Select All button with class drum .lenght => to use in in  the condition of for loop


var numberOfButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i<numberOfButtons ; i++) {

// Ananomys function
//addEventListener("the type of listener", function(){});
//document.querySelectorAll(".drum")[i] =>  select all button from 0 to its the number of buttons
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    // When add event listener on the first drum make this sound..
     // How to Add Sound by Using javascript => var var_name =  new Audio('name_of_audio.mp3');
     //var_name.play();
     // Will trigger the inner html when click the button ex => when click on button k contain text K
     //detect the button  by inner html
     var buttonClick = this.innerHTML;
     makenoise(buttonClick);
     buttonAnimation(buttonClick);
  });
}

document.addEventListener("keypress", function(event) {
                makenoise(event.key);
                buttonAnimation(event.key);
});

function makenoise(key) {
  switch(key){
    case "w":
    var tom1 = new Audio("sounds/tom-1.mp3");
    tom1.play();
    break;
    case "a":
    var tom2 = new Audio("sounds/tom-2.mp3");
    tom2.play();
    break;
    case "s":
    var tom3 = new Audio("sounds/tom-3.mp3");
    tom3.play();
    break;
    case "d":
    var tom4 = new Audio("sounds/tom-4.mp3");
    tom4.play();
    break;
    case "j":
    var snare = new Audio("sounds/snare.mp3");
    snare.play();
    break;
    case "k":
    var crash  = new Audio("sounds/crash.mp3")
    crash.play();
    break;
    case "l":
    var kick = new Audio("sounds/kick-bass.mp3");
    kick.play();
    break;

    default: console.log(key);

  }

}
function buttonAnimation(currentKey) {
  var activeButton  = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
      activeButton.classList.remove("pressed");
  },300);




}
