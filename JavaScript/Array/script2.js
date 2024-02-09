let square;

function CreateSquare(){
    square = document.createElement("div");
    square.style.width = "100px";
    square.style.height = "100px";
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    square.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
    let posX = Math.floor(Math.random() * window.innerWidth) - square.offsetWidth;
    let posY = Math.floor(Math.random() * window.innerHeight) - square.offsetHeight;
    square.style.position = "absolute";
    square.style.left = posX + "px";
    square.style.top = posY + "px";
    console.log("X: " + posX + " Y: " + posY);
    const container = document.querySelector(".content");
    container.appendChild(square);
    
}
let button = document.querySelector("button");
button.onclick = CreateSquare;


