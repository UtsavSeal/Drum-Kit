let drumButtons = document.querySelectorAll(".drum");

for (let i = 0; i < drumButtons.length; i++) {
    drumButtons[i].addEventListener("click", function () {
        makeSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });
}

document.addEventListener("keydown", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key){
    switch (key) {

        case "w":
            let crash = new Audio("./sounds/crash.mp3");
            crash.cloneNode().play();
            break;
        case "a":
            let kick = new Audio("./sounds/kick-bass.mp3");
            kick.cloneNode().play();
            break;
        case "s":
            let snare = new Audio("./sounds/snare.mp3");
            snare.cloneNode().play();; 
            break;
        case "d":
            let tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.cloneNode().play();
            break;
        case "j":
            let tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.cloneNode().play();
            break;
        case "k":
            let tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.cloneNode().play();
            break;
        case "l":
            let tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.cloneNode().play();
            break;      
    }
}

function buttonAnimation(currentKey){
   let activeButton =  document.querySelector(`.${currentKey}`);
   activeButton.classList.add("pressed");
   setTimeout(function(){
       activeButton.classList.remove("pressed");
   }, 100);
}
