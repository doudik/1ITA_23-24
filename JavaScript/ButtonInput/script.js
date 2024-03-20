const ceskaAbeceda = [
    "A",
    "Á",
    "B",
    "C",
    "Č",
    "D",
    "Ď",
    "E",
    "É",
    "Ě",
    "F",
    "G",
    "H",
    "CH",
    "I",
    "Í",
    "J",
    "K",
    "L",
    "M",
    "N",
    "Ň",
    "O",
    "Ó",
    "P",
    "Q",
    "R",
    "Ř",
    "S",
    "Š",
    "T",
    "Ť",
    "U",
    "Ú",
    "Ů",
    "V",
    "W",
    "X",
    "Y",
    "Ý",
    "Z",
    "Ž",
  ];
spawnButtons();
spawnColorButtons();
function spawnButtons(){
    ceskaAbeceda.forEach(element => {
        let btn = document.createElement("button");
        btn.innerText = element;
        btn.classList.add("btn", "btn-primary", "m-1");
        btn.onclick = () => {
            findAndInsertText(btn.innerHTML);
        }
        document.body.appendChild(btn);
    });
}
function findAndInsertText(char){
    let input = document.querySelector(".textInput");
    input.innerHTML += char;
}
function spawnColorButtons(){
    let colorArray = ["red", "blue", "green", "yellow", "orange", "purple", "pink", "brown", "black", "white"];
    colorArray.forEach(element => {
        let btn = document.createElement("button");
        btn.innerText = element;
        btn.classList.add("btn", "m-3");
        btn.style.backgroundColor = element;
        btn.onclick = () => {
            document.body.style.backgroundColor = element;
        }
        btn.style.fontWeight = "bold";
        btn.style.fontSize = "1.5rem";
        document.body.appendChild(btn);
    });
}

