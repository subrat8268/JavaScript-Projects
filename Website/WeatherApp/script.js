const apiKey = "8fe9a6bbc14daef28cc151be398845be";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units&q=";

const searchBox = document.querySelector(".search-bar")
const searchButton = document.querySelector(".search-button")

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);

 

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp - 273.15) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
}
searchButton.addEventListener('click', ()=>{
    checkWeather(searchBox.value);
})