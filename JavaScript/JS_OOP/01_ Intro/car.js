class Auto{
    constructor(znacka, model, rokVyroby, jeVprovozu){
        this.znacka = znacka;
        this.model = model;
        this.rokVyroby = rokVyroby;
        this.jeVprovozu = jeVprovozu;
    }
    stari(){
        //return difference between rokVyroby and actual date
        let todaysDate = new Date().getFullYear();
        return todaysDate - this.rokVyroby;
    }
}
function vypisInfo(auto){
    if(auto.jeVprovozu){
        console.log(`${auto.znacka} ${auto.model} - je v provozu
         od roku ${auto.rokVyroby}.`)
    }else{
        console.log(`${auto.znacka} ${auto.model} - není v provozu, neboť
         je vyrobeno v roce ${auto.rokVyroby}.`)
    }
}
const audi = new Auto("Audi", "Q7", "2012", "false");
