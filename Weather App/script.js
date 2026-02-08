const inputBox = document.querySelector('.input-box');
const searchBtn = document.querySelector('#searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.querySelector('#humidity');
const wind_speed = document.querySelector('#wind-speed');

async function checkWeather(city){
  const api_key = "8fb4101a3e4e837fa6c2aec12836d39e";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;

  const weather_data = await fetch(url).then(res => res.json());
  console.log(weather_data);
}

searchBtn.addEventListener('click', ()=>{
  checkWeather(inputBox.value);
});
