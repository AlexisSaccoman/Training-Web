
// clé api : ddd2934d2126bf435df4dda02be04d1a
// lien api : 

const key = 'ddd2934d2126bf435df4dda02be04d1a';
const url = `https://home.openweathermap.org/?api_key=${key}`;

const searchBtn = document.querySelector('.action_search');
const search = document.querySelector('.search');
const card_weather = document.querySelector('.card_weather');
const weather_tmp = document.querySelector('.weather_tmp');
const weather = document.querySelector('.weather');
const water = document.querySelector('.water');
const wind = document.querySelector('.wind');
const img = document.querySelector('.img_weather');

searchBtn.addEventListener('click', () => {
    
    const city = search.value;

    if(city == '') {
        return;    
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ddd2934d2126bf435df4dda02be04d1a&units=metric`)
    .then(response => response.json())
    .then(data => {
        if(data.cod == 404) {
            alert('City not found');
            return;
        }
        const tmp = data.main.temp;
        const tmp_water = data.main.humidity;
        const tmp_wind = data.wind.speed;
        const tmp_weather = data.weather[0].description;

        card_weather.style.display = 'flex';

        weather_tmp.innerHTML = tmp + '°C';
        weather.innerHTML = tmp_weather;
        water.innerHTML = tmp_water + '%';
        wind.innerHTML = tmp_wind + 'km/h';

        switch(data.weather[0].main) {
            case 'Clear':
                img.src = 'images/clear.png';
                break;
            case 'Clouds':
                img.src = 'images/cloud.png';
                break;
            case 'Mist':
                img.src = 'images/mist.png';
                break;
            case 'Rain':
                img.src = 'images/rain.png';
                break;
            case 'Snow':
                img.src = 'images/snow.png';
                break;
            default:
                img.src = 'images/clear.png';
                break;
        }
    })


});