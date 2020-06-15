const key = 'dc9c8add2c961f70afdb5603c1a00333';

const button=document.getElementById("btn");
const input=document.getElementById("txt1");
const place=document.getElementById("showPlace");
const date=document.getElementById("showDayAndTime");
const weather=document.getElementById("showWeather");
const icon=document.getElementById("icon");
const Temp=document.getElementById("showTemperature");

button.addEventListener('click',function(){

	fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid='+key)
	.then(response=>response.json())
	.then(data=>{
		var city=data['name']+','+data['sys']['country'];
		var tempValue=Math.floor(data['main']['temp']-273.15)+ "&nbsp;"+'&#8451' ;
		var WeatherDes=data['weather'][0]['description'];
		var current = new Date();     	
			var days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
			var day = days[current.getDay()];	
			var hh = current.getHours();        
			var mm = current.getMinutes();      	
			var ss = current.getSeconds();
			var ImgIcon="http://openweathermap.org/img/w/" +data.weather[0].icon + ".png";
			
		
		place.innerHTML=city;
		date.innerHTML = day + ", " + hh + ":" + mm + ":" + ss;
		weather.innerHTML=WeatherDes;
		Temp.innerHTML=tempValue;
		icon.src=ImgIcon;

	}
		
		)


	
.catch(err=>alert("No info available for city, Please try a different city!!"))


} )