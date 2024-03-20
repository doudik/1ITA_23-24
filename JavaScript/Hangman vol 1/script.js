const slova = [
  "přetěžováni",
  "povztekání",
  "prozpěvování",
  "pořizovateli",
  "přemazávání",
  "převazovanými",
  "perverznějšími",
  "prezentovanými",
  "příznakovější",
  "převzorkování",
  "keprový",
  "keynesiánců",
  "kejklavé",
  "kesonech",
  "keprovýma",
  "keser",
  "kesonovýma",
  "kelímkovým",
  "kempem",
  "ken",
  "nedokážeš",
  "neprivatizujme",
  "vymalovali",
  "linhartického",
  "ploutevním",
  "zakreslený",
  "čistokrevností",
  "kopolyesterovému",
  "účastnily",
  "nenasazovaly",
  "zelináře",
  "radostí",
  "obešly",
  "kyzovém",
  "skrývými",
  "zneprůzračnit",
  "předepsánými",
  "jihoameričanovo",
  "záškodníkova",
  "netřebickou",
  "příjmového",
  "roznožky",
  "obkladovým",
  "hospodyňskýma",
  "nerovnoramenném",
  "nevědecký",
  "zajistitelem",
  "nejuspořádanějším",
  "vidítou",
  "korpulentních",
  "osvobozují",
  "toaletnímu",
  "nezablokujte",
  "rozlišovány",
  "jamajce",
  "spínátkem",
  "litovaného",
  "vysypte",
  "rozměřovaném",
  "taxikářův",
  "křečkové",
  "odpálíte",
  "rovnodušný",
  "zbytečným",
  "rohlíčku",
  "paralytikovy",
  "peršanovou",
  "automatizujme",
  "práčem",
  "vyťukaných",
  "arzenálem",
  "zanikajícího",
  "otitulkovávat",
  "sebedefinice",
  "aktivem",
  "zreorganizovaném",
  "svízelný",
  "zahnulo",
  "lékarnický",
  "nezachráněni",
  "založily",
  "okořeňují",
  "přeplní",
  "rozostřili",
  "plnomocných",
  "podsouvaná",
  "dokládali",
  "ukřivdíme",
  "svačinkovýma",
  "nestřídé",
  "nešikových",
  "polévejte",
  "nominujte",
  "osívaném",
  "kalibrací",
  "nepoučen",
  "malečovskou",
  "dovřeli",
  "stylce",
  "okrašlovat",
];
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

let guessingWord = "";
let dashArray = [];
getRandomWordandFillDashes();

function getRandomWordandFillDashes() {
  guessingWord = slova[Math.floor(Math.random() * slova.length)].toUpperCase();
  for (let i = 0; i < guessingWord.length; i++) {
    dashArray.push("_");
  }
  newGame();
}
function displayWord() {
  let ul = document.querySelector("ul");
  for (let i = 0; i < dashArray.length; i++) {
    let element = document.createElement("li");
    element.innerHTML = "_";
    ul.appendChild(element);
  }
}
function displayButton() {
  let alphabet = document.querySelector(".alphabet");
  for (let i = 0; i < ceskaAbeceda.length; i++) {
    let button = document.createElement("button");
    button.classList.add("btn", "btn-primary");
    button.innerHTML = ceskaAbeceda[i];
    button.onclick = () => {
        checkLetter(button);
    }
    alphabet.appendChild(button);
  }
}
function newGame() {
  displayWord();
  displayButton();
}
function checkLetter(button){
    let buttonText = button.innerHTML.toUpperCase();
    for(let i = 0; i < guessingWord.length; i++){
        if(guessingWord[i] == buttonText){
            dashArray[i] = buttonText;
        }
    }
    UpdateDashes();
    UpdateButtons(button);
}
function UpdateButtons(button){
    if(UpdateColorOfButton(button)){
        button.style.backgroundColor = "green";
    }else{
        button.style.backgroundColor = "red";
    }
    button.disabled = true;
}
function UpdateColorOfButton(button){
    return guessingWord.includes(button.innerHTML)? true: false;
}
function UpdateDashes(){
    let liArray = document.querySelectorAll("li");

    for(let i = 0; i < guessingWord.length; i++){
        liArray[i].innerHTML = dashArray[i];
    }
}
