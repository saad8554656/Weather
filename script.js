const apiKey = "d6eb3aac9af371561fe34493ebd8f96d";
const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;
const weatherIcon = document.querySelector(".weather-icon");

document.getElementById("btn").onclick = async function checkWeather() {
    const city = document.querySelector("input").value.trim();  
    if (!city) {
        alert("Please enter a city name!"); 
        return;
    }

    const response = await fetch(url + city + `&appid=${apiKey}`);
    if (response.ok) {
        const data = await response.json(); 
        console.log(data); 

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        if (data.weather[0].main === "Clouds") {
            weatherIcon.src = "images/cloud.png";
        } else if (data.weather[0].main === "Clear") {
            weatherIcon.src = "images/sunny.png";
        } else if (data.weather[0].main === "Rain") {
            weatherIcon.src = "images/rain.png";
        } else if (data.weather[0].main === "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
        } else if (data.weather[0].main === "Mist") {
            weatherIcon.src = "images/mist.png"; 
        } else {
            weatherIcon.src = "images/sunny.png";
        }

        document.querySelector(".weather").style.display = "block";
    } else {
        alert("City not found or an error occurred. Please try again!");
    }
};
