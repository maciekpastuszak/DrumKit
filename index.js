var noOfDrumBtns = document.querySelectorAll(".drum").length;

for (let i = 0; i < noOfDrumBtns; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {

        var btnClicked = this.innerHTML;

switch (btnClicked) {
    case "w":
        var tom1 = new Audio('/sounds/tom-1.mp3')
        tom1.play();
        break;
    case "a":
        var tom2 = new Audio('/sounds/tom-2.mp3')
        tom2.play();
        break;

    default:
        break;
}
      
    })
   
   

}
