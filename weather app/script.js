const apiKey = "3ddf571a1fca22d908235f0346e676c4"
const weatherData =  document.getElementById("result")
const cityInput =  document.getElementById("input")
const formSumbmit = document.querySelector("form") 

formSumbmit.addEventListener("submit", (event)=>{
       event.preventDefault()  //nece se refreshovati stranica pri sumbitovanju forme
       const cityValue =  cityInput.value
       getWeather(cityValue)
})

async function getWeather(cityValue){
         try {

            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`)
          
            const data =  await response.json()
            console.log(data)

            if(!response.ok){                                //ako nema responsa baci gresku
                throw new Error("Network response failed")
            }
            

            const temperature = Math.round(data.main.temp)
            const descrip = data.weather[0].description
            const weathIcon = data.weather[0].icon
            const mainDesc =  data.weather[0].main

            const details = [
                `Feels like: ${Math.round(data.main.feels_like)}°C`,
                `Humidity : ${data.main.humidity}%`,
                `Wind Speed: ${data.wind.speed} m/s`    
            ]

            weatherData.querySelector(".icon").innerHTML = `<img src="http://openweathermap.org/img/wn/${weathIcon}.png" alt="Weather Icon">`
            weatherData.querySelector(".temperature").innerHTML = temperature + "°C"
            weatherData.querySelector(".description").innerHTML = descrip
            weatherData.querySelector(".details").innerHTML = details.map((detail)=> `<div>${detail}</div>`).join("")  // prolazi kroz zadati div i mapira sta ima u njemu i smesta to u detail, zati menja sadrzaj u divu element po element


         } catch (error) {
            weatherData.querySelector(".icon").innerHTML = ''
            weatherData.querySelector(".temperature").innerHTML = ''
            weatherData.querySelector(".description").innerHTML = 'An error has occured or you entered incorrect city name!'
            weatherData.querySelector(".details").innerHTML = ''
         }
}