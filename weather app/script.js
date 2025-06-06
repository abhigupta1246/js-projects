const inputBox=document.querySelector('.input-box');
const searchBtn=document.getElementById('searchBtn');
const weather_img=document.querySelector('.weather-img');
const temprature =document.querySelector('.temprature');
const description=document.querySelector('.description');
const humidity= document.getElementById('humidity');
const Wind_speed=document.getElementById('Wind-speed');
const location_not_found = document.querySelector('.location-not-found');
const weather_body= document.querySelector('.weather-body');


async function checkWeather(city){

    const api_key="012ab3b59641f7b732cef2bfe30a7bb1";
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;


    const  weather_data = await fetch(`${url}`).then(response=> response.json());
    


    if(weather_data.cod === `404`){
        location_not_found.style.display="flex";
        weather_body.style.display = "none";
        console.log("error");
        return;
    }
       location_not_found.style.display = "none";
    weather_body.style.display = "flex";

    temprature.innerHTML=`${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML=`${weather_data.weather[0].description}`;

    humidity.innerHTML=`${weather_data.main.humidity}%`;

    Wind_speed.innerHTML=`${weather_data.wind.speed}km/H`;





    switch(weather_data.weather[0].main){
        case'Cloud':
           weather_img.src="assets/cloud.png";
           break;
        case'Clear':
           weather_img.src="assets/clear.png";
           break;
        case'Rain':
           weather_img.src="assets/rain.png";
           break;
        case'Mist':
           weather_img.src="assets/mist.png";
           break;
        case'Snow':
           weather_img.src="assets/snow.png";
           break;
    }




    console.log(weather_data)



}
searchBtn.addEventListener('click', () => {
    const city = inputBox.value.trim();

    if (city === "") {
        weather_body.style.display = "none";
        location_not_found.style.display = "none"; 
        return;
    }

    checkWeather(city);
});





// searchBtn.addEventListener('click', ()=>{
//     checkWeather(inputBox.value);
// })