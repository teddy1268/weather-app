const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q="
const apiKey="beadf062ad4d6c8a8008b831b1c799fe"

let input = document.getElementById("input")
let search = document.getElementById("search")

let img = document.querySelector(".snoww")

async function check(name){
    const response= await fetch(apiUrl + name +  `&appid=${apiKey}`)
    var data = await response.json()

    if (response.status== 404){
        document.querySelector(".error").style.display="block"
        document.querySelector(".weather").style.display='none'

    }
    else{
        document.querySelector(".error").style.display="none"
        document.querySelector(".weather").style.display='block'

    }

    console.log(data)

    document.querySelector(".city").innerHTML=data.name 
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°C"
    document.querySelector(".humm").innerHTML=data.main.humidity + "%"
    document.querySelector(".win").innerHTML=data.wind.speed + "km/hr"


    if(data.weather[0].main=="Clouds"){
        img.src="clouds.png"
    }
    else if(data.weather[0].main=="Clear") {
        img.src="clear.png"
    }
    else if(data.weather[0].main=="Snow"){
        img.src="snow.png"
    }
    else if(data.weather[0].main=="Rain") {
        img.src="rain.png"
    }
    else if(data.weather[0].main=="Drizzle") {
        img.src="drizzle.png"
    }
    else if(data.weather[0].main=="Mist") {
        img.src="mist.png"
    }            
        document.querySelector(".weather").style.display='block'

}

search.addEventListener("click", ()=>{
    check(input.value)
})
  

