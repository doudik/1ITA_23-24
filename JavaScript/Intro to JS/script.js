let container = document.createElement("div");
container.style.display = "flex";
container.setAttribute("col-sm-3", "col-sm-3");

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