var autoChange = true


var interval = window.setInterval(function () {

    var cDate = new Date()
    var Chour = cDate.getHours();
    var cMin = cDate.getMinutes();

    document.getElementById('h').innerHTML = Chour + " : "
    document.getElementById('M').innerHTML = cMin


})

var cDate = new Date()
var hour = cDate.getHours();
var Min = cDate.getMinutes();



function DarkMode() {
    document.body.style.backgroundImage = "url('https://www.wallpapertip.com/wmimgs/22-225176_fondo-de-estrellas-animadas-fondo-de-pantalla-estrellas.jpg')"
    document.getElementById("h").style.color = "white";
    document.getElementById("M").style.color = "white";
    document.getElementById("ligh").style.color = "white";
    document.getElementById("foote").style.color = "white";

}

function LighMode() {
    document.body.style.backgroundImage = "url('https://images.pexels.com/photos/53594/blue-clouds-day-fluffy-53594.jpeg?cs=srgb&dl=pexels-pixabay-53594.jpg&fm=jpg')"
    document.getElementById("h").style.color = "black";
    document.getElementById("M").style.color = "black";
    document.getElementById("ligh").style.color = "black";
    document.getElementById("foote").style.color = "black";

}





if (navigator.onLine) {

} else {
    alert('Please Check Your Connection, Can not request data from Severs(401 : state=Offline) reasone : User Offline');
}

function Search() {



    let user_Input = document.getElementById('userInput').value;
    let url = "https://api.openweathermap.org/data/2.5/weather?q=" + user_Input + "&appid=d48d1ec25331758b0c704084976b9156"
    let SeeMoreURL ="https://en.wikipedia.org/wiki/"+user_Input
     let FlagLink = "https://countryflagsapi.com/png/"

    var __city = "weather status in " + user_Input
    var __description = "In " + user_Input + " it's Look Like "

    var __feelsLike = "In " + user_Input + " it feels Like "
    var __humid = "💧 Humidity In  " + user_Input + " is about "
    var __pressure = "Atmospheric pressure in " + user_Input + " is "
    var __temp = "Temperature in " + user_Input + " is "
    var __temp_max = "Maximium Temperature in " + user_Input + " is "
    var __temp_min = "minimum temperature in " + user_Input + " is "



    var __wind_deg = "wind is blowing in "
    var __wind_speed = "wind speed is recorded as "

    var ___wind_deg_back = " Angle in" + user_Input
    var ___wind_speed_back = " Mp/h in " + user_Input + " last hour(Updated)"

    var __sunrise = "sunsrise = "
    var __sunset = "sunset  = "


    fetch(FlagLink)
    .then(resault =>{
        return resault.json()
    })
    .then(data =>{
        console.log(data)
    })

    fetch(url)
        .then(resalut => {
            return resalut.json()
        })
        .then(data => {
            console.log(data)



            var feelsLike = data['main']['feels_like']
            var humid = data['main']['humidity']
            var pa = data['main']['pressure']
            var temp = data['main']['temp']
            var temMax = data['main']['temp_max']
            var tempMin = data['main']['temp_min']

            var info = data['weather'][0]['description']
            var w_main = data['weather'][0]['main']

            var wind_deg = data['wind']['deg']
            var wind_speed = data['wind']['speed']

            var sunR = data['sys']['sunrise']
            var sunSet = data['sys']['sunset']

            var lat_location = data['coord']['lat']
            var lon_location = data['coord']['lon']


            var coun = data['sys']['country']

            console.log(lon_location)
            console.log(lat_location)
            console.log(humid)
            console.log(pa)
            console.log(temp)
            console.log(info)

            
            var faranhite = feelsLike * 9 / 5 + 32

            document.getElementById('state_feelsLikeTemp').innerHTML = __feelsLike + feelsLike / 10 + " °C " + faranhite / 10 + " in °F"
            document.getElementById('state_humid').innerHTML = __humid + humid + " %"
            document.getElementById('state_pressure').innerHTML = __pressure + pa + " Pa"
            document.getElementById('state_temp').innerHTML = __temp + temp / 10 + " °C"
            document.getElementById('state_temp.max').innerHTML = __temp_max + temMax / 10 + " °C"

            document.getElementById('state_temp.min').innerHTML = __temp_min + tempMin / 10 + " °C"
            document.getElementById('state_weather_main').innerHTML = "sky in " + user_Input + " is " + w_main
            document.getElementById('wind_degreees').innerHTML = __wind_deg + wind_deg + "° " + ___wind_deg_back
            document.getElementById('wind_speed').innerHTML = __wind_speed + wind_speed + ___wind_speed_back
            document.getElementById('sys_sunrise').innerHTML = __sunrise + " in " + sunR / 1000000000 + " Hours"
            document.getElementById('sys_sunset').innerHTML = __sunset + " in " + sunSet / 1000000000 + " Hours"

            document.getElementById('_description').innerHTML = __description + info
            document.getElementById('_weather').innerHTML = "weather In " + user_Input

            document.getElementById('Long_').innerHTML = "Longtitude of " + user_Input +"- "+ lon_location
            document.getElementById('Lati_').innerHTML = "Latitiude of " + user_Input +"- "+ lat_location
            document.getElementById('_locations').innerHTML = " 📍Precise Location in " + user_Input

            
            document.getElementById('Link').innerHTML = "see More About "+ user_Input
            Link.href = SeeMoreURL
             
            //document.getlementById('cou').innerHTML = " Lo catio:  " + coun + " made by TSNO "
            document.getElementById('cou').innerHTML = " 📍Location " + coun + " made by TSNO"

           
img.src = 'https://www.countryflagicons.com/FLAT/64/'+coun+'.png'
         
        })
}