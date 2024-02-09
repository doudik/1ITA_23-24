function CreateSquare(){
    let square = document.createElement("div");
    square.style.width = "100px";
    square.style.height = "100px";
    square.style.backgroundColor = "red";
    square.style.margin = "10px";

    square.style.display = "flex";
    square.style.justifyContent = "center";
    square.style.alignContent = "center";
    square.style.flexDirection = "column";
    square.style.alignItems = "center";

    square.style.color = "white";
    square.style.fontSize = "20px";
    square.style.fontWeight = "bold";
    
    square.onclick = function(){
        const array = ["red", "blue", "green", "yellow", "black", "white"];
        let random = Math.floor(Math.random() * array.length);
        square.innerHTML = array[random];
    }
    document.body.appendChild(square);
}

CreateSquare();