// import("./Square.js");
new Square("green");
new Square("red");
new Square("blue");
new Square("yellow");
document.body.addEventListener("keypress", moveSquare);

function moveSquare(){
    currentSquare.square.style.position = "relative";
    let currentLeft = parseInt(currentSquare.square.style.left) || 0;
    let currentTop = parseInt(currentSquare.square.style.top) || 0;
    let tmpSquareCommand = currentSquare.square.style;
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
