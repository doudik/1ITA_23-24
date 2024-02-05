let container = document.createElement("div");
container.style.display = "flex";
container.style.maxWidth = "100vw";
container.style.flexWrap = "wrap";
container.setAttribute("md-6", "true");

function CreateSquare(){
    let square = document.createElement("div");
    square.style.width = "100px";
    square.style.height = "100px";
    square.style.margin = "10px";
    square.style.minWidth = "100px";
    square.style.backgroundColor = "red";
    container.appendChild(square);
    document.body.appendChild(container);
}
let button = document.getElementById("createSquareDiv");
button.onclick = CreateSquare;