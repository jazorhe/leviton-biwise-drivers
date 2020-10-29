var zip    = THIS_DEVICE.SETTINGS.zip;
var city   = THIS_DEVICE.SETTINGS.city;
var apiKey = THIS_DEVICE.SETTINGS.apiKey;
var date   = new Date();

var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();
if (hours < 10) { hours = "0" + hours;}
if (minutes < 10) { minutes = "0" + minutes;}
if (seconds < 10) { seconds = "0" + seconds;}
date = hours + ":" + minutes + ":" + seconds + " " + months[date.getMonth()] + " " + date.getDate();


var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://api.openweathermap.org/data/2.5/weather?zip=" + zip + ",au&appid=" + apiKey);
xhr.setRequestHeader('Content-Type', 'application/json');

xhr.send();

xhr.onload = function() {
  if (xhr.status != 200) { // analyze HTTP status of the response
    // alert(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
	var icon        = "--";
	var temp 	    = "--";
	var feels_like  = "--";
	var humidity    = "--";
	var pressure    = "--";
	var wind        = "--";
	var location    = "--";
	var description = "--";
	} else { // show the result
	// alert(responseObj);
	var responseObj = JSON.parse(xhr.response);
	var icon        = responseObj.weather[0].icon;
	var temp 	    = responseObj.main.temp - 273.15;
	var feels_like  = responseObj.main.feels_like - 273.15;
	var humidity    = responseObj.main.humidity;
	var pressure    = responseObj.main.pressure;
	var wind        = responseObj.wind.speed;
	var location    = ""
	var description = responseObj.weather[0].description;

	temp       = temp.toFixed(0);
	feels_like = feels_like.toFixed(0);

	THIS_DEVICE.WeatherWidgetDivFunc(city, icon, description, temp, feels_like, wind, humidity, pressure, date);
  }
};

xhr.onerror = function() {
  // alert("Request failed");
  	var icon        = "--";
	var temp 	    = "--";
	var feels_like  = "--";
	var humidity    = "--";
	var pressure    = "--";
	var wind        = "--";
	var location    = "--";
	var description = "--";
	THIS_DEVICE.WeatherWidgetDivFunc(city, icon, description, temp, feels_like, wind, humidity, pressure, date);

};

xhr.timeout = 10000;

return "";
