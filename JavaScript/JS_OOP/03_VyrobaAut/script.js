function pridejAutoDoVyroby(){
    let znacka = document.getElementById("znackaAuta").value;
    let model = document.getElementById("modelAuta").value;
    let motorizace = document.getElementById("motorizaceAuta").value;

    new Automobil(znacka, model, motorizace);
}