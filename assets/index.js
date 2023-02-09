
var searchHistory =[];
var searchBtn = document.getElementById("submit-button");
var searchBarInput = document.querySelector(".searchbarInput");
var cityName = document.querySelector('.name');
var temp = document.querySelector('.temp');
var wind = document.querySelector('.wind');
var humidity = document.querySelector('.humidity');
var apiKey = "1fb41e48b657cf2ffc887ad1435cafe9"
const cardsContainer = document.getElementById('cardsContainer')

function getApi() {
    var requestUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + searchBarInput.value + "&units=imperial&appid=" + apiKey;

    fetch(requestUrl)
        .then(function (response) {
            if (response.ok) {
                return response.json()
            }
            return null
        })
        .then(function (data) {
            console.log(data)
            getFiveDays(data.coord.lat, data.coord.lon)
            cityName.textContent = data.name
            wind.textContent = data.wind.speed
            temp.textContent = data.main.temp
            humidity.textContent = data.main.humidity
        });
}

function getFiveDays(lat, lon) {
    const requestApi = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`

    fetch(requestApi)
        .then(function (response) {
            if (response.ok) {
                return response.json()
            }
            return null
        })
        .then(function (data) {
            console.log(data)
            for (let i = 0; i < data.list.length; i++) {
                const el = data.list[i];
                if (el.dt_txt.includes('06:00:00')) {


                    const card = document.createElement('div')
                    card.classList.add('card')
                    card.innerHTML = `<div class = 'card-body'>Temp: ${el.main.temp} \nWind: ${el.wind.speed} \nHumidity: ${el.main.humidity}</div>`

                    cardsContainer.append(card)
                }
            }
        })

}



searchBtn.addEventListener("click", getApi);