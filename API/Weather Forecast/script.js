const api_url = "https://api.weatherapi.com/v1/history.json?key=7bda45a82ec34c28bfc90449242205&q=Ústí nad Labem&dt=2024-05-22";


async function getWeather() {
    const jsonFile = await fetch(api_url); // Fetch the JSON file
    const data = await jsonFile.json(); // convert the JSON file to a JavaScript object
    console.log(data.forecast.forecastday[0].date);
    

    (data.forecast.forecastday[0].forecast.hour).forEach(hour => {
        console.log("a");
    });

    createNewCity(data.location.name, data.current.temp_c, data.current.temp_f, data.current.last_updated);

}

getWeather();

function createNewCity(name, celcius, fahrenheit, last_updated){
    //console.log(name, celcius, fahrenheit);
    new city(name, celcius, fahrenheit, last_updated);
}