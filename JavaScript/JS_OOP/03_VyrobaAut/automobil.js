/*function pridejAutoDoVyroby(){

    let znacka = document.getElementById("znackaAuta").value;
    let model = document.getElementById("modelAuta").value;
    let motorizace = document.getElementById("motorizaceAuta").value;
    let dobaVyroby = Math.floor(Math.random() * 720);

    console.log(`${znacka} - ${model} - ${motorizace}`);

    let container = document.querySelector(".container");
    let div = document.createElement("div");
    div.innerHTML = `
        <h2>Značka: ${znacka} - ${model}</h2>
        <p>Motorizace: ${motorizace} </p>
        <p>Čas do výroby: ${dobaVyroby}</p>
    `;
    container.appendChild(div);
}
    */
let autaVeVyrobe = [];

class Automobil{
    constructor(znacka, model, motorizace){
        this.znacka = znacka;
        this.model = model;
        this.motorizace = motorizace;
        this.casVyroby = Math.floor(Math.random() * 730);
        this.zobrazInformaceOAute();
        autaVeVyrobe.push(this);
    }
    zobrazInformaceOAute(){
        let div = document.createElement("div");
        div.innerHTML = `
            <h2>${this.znacka}</h2>
            <p>model: ${this.model}</p>
            <p>motorizace: ${this.motorizace}</p>
            cas do vyroby:<p class="citac">${this.casVyroby}</p>
        `;

        //pridat div do containeru
        const container = document.querySelector(".container");
        container.appendChild(div);
    }   
}

setInterval(() => {
    updateVyroby();
}, 1000);

function updateVyroby(){
    if(autaVeVyrobe.length > 0){
        let updateCasuHTML = document.querySelectorAll(".citac");

        for (let i = 0; i < autaVeVyrobe.length; i++) {
            autaVeVyrobe[i].casVyroby--;
            updateCasuHTML[i].innerHTML = parseInt(updateCasuHTML[i].innerHTML)-1;
        }
    }
}