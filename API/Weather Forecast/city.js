class city{
    constructor(name, celcius, fahrenheit, createdOn){
        this.celcius = celcius;
        this.fahrenheit = fahrenheit;
        this.name = name;
        this.createdOn = createdOn;
        showCityOnScreen(this.name, this.celcius, this.fahrenheit, this.createdOn);
    }
}
    function showCityOnScreen(name, celcius, fahrenheit, createdOn){
        let div = document.createElement("div");
        div.style.border = "1px solid black";
        div.style.width = "300px";
        div.style.height = "200px";
        div.style.padding = "10px";
        div.innerHTML = `
            <h1>${name}</h1>
            <h3>Celcius: ${celcius}</h3>
            <h3>Fahrenheit: ${fahrenheit}</h3>
            <h3>Created on: ${createdOn}</h3>
        `;
        document.body.appendChild(div);
}
