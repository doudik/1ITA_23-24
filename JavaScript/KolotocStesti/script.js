const arrayOfPeople = [
    "Bílek Pavel",
    "Burša Jakub",
    "Havlica Jiří",
    "Hess Jakub",
    "Hladík Jan",
    "Holý Robin",
    "Košnár Nicolas",
    "Kotek Petr",
    "Malík Marco",
    "Mamai Kostiantyn",
    "Mareš Lukáš",
    "Nieves Šimon",
    "Sněhota Jakub",
    "Sobotka Jonáš",
    "Stupka Marek",
    "Šmajsl Lukáš",
    "Toman Michal",
    "Vacek Matyáš",
    "Vaník Lukáš",
    "Vavřichová Eliška",
    "Vittek Matyáš",
    "Vyšata Oldřich"
];
let circle; //globální proměnná

function Trial(){
    let randomIndex = Math.floor(Math.random() * arrayOfPeople.length); // 10.1231312
    
    for(let i = 0; i < randomIndex; i++){
        console.log(arrayOfPeople[i]);
    }
    // zkouším přidat lidi po jednom do tlačítka
    
    for(let i = 0; i < randomIndex; i++){
        let button = document.createElement("button");
        button.innerHTML = arrayOfPeople[i];
        document.body.appendChild(button);
        console.log(arrayOfPeople[i]);
    }
}
function GetIndex(){
    let randomIndex = Math.floor(Math.random() * arrayOfPeople.length);
    return randomIndex;
}
function GetPerson(){
    let person = arrayOfPeople[GetIndex()];
    return person;
}
function GameController(){
    AddCircle();
    Spin();
}
function Spin(){
    let counter = GetIndex();
    for(let i = 0; i < counter; i++){
        circle.innerHTML = GetPerson();
    }
}
function AddCircle(){
    circle = document.createElement("div");
    circle.style.width = "100%";
    circle.style.height = "100%";
    circle.style.backgroundColor = "red";
    circle.style.borderRadius = "100%";
    circle.style.textAlign = "center";
    document.body.appendChild(circle);
}