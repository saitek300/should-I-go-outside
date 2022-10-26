var searchBtn = document.getElementById("submit-button");
var searchBarInput = document.querySelector(".searchbarInput");
var name = document.querySelector('.name');
var temp = document.querySelector('.temp');
var wind = document.querySelector('.wind');
var humidity = document.querySelector('.humidity');
var apiKey = "1fb41e48b657cf2ffc887ad1435cafe9"


function getApi() {
   var requestUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + searchBarInput.value + "&appid=" + apiKey;

   fetch(requestUrl)
   .then(function (response) {
    if (response.ok){
        return response.json()
    }
    return null
})
   .then(function(data){
    console.log(data)
   });
}

searchBtn.addEventListener("click",getApi);