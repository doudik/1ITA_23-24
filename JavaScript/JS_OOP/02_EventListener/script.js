// import("./Square.js");
const greenSquare = new Square("green");
new Square("red");
document.body.addEventListener("keypress", moveSquare);

function moveSquare(){
    greenSquare.square.style.position = "relative";
    let currentLeft = parseInt(greenSquare.square.style.left) || 0;
    let currentTop = parseInt(greenSquare.square.style.top) || 0;
    let tmpSquareCommand = greenSquare.square.style;
    switch(event.key){
        case "d":
            currentLeft += 20;
            tmpSquareCommand.left = currentLeft + "px"; 
            break;
        case "s":
            currentTop += 20;
            tmpSquareCommand.top = currentTop + "px";
            break;
        case "a":
            currentLeft -= 20;
            tmpSquareCommand.left = currentLeft + "px";
            break;
        case "w":
            currentTop -= 20;
            tmpSquareCommand.top  = currentTop + "px";
            break;
        default:
            console.log("oops");
    }
    
}
