class Square{
    constructor(color){
        this.color = color;
        this.square;
        this.createSquare();
    }
    createSquare(){
        this.square = document.createElement("div");
        this.square.style.width = 100 + "px";
        this.square.style.height = 100 + "px";
        this.square.style.backgroundColor = this.color;
        this.square.onclick = () => {
             setCurrentSquare(this);
        } 
        document.body.appendChild(this.square);
    }
}
let currentSquare;

function setCurrentSquare(objectSquare){
    currentSquare = objectSquare;
}