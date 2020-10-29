/***** Default Script Device Callbacks ****/

THIS_DEVICE.OnGUILoaded = function(Name){
	//This function is called by the API whenever a new page is loaded
	try{
		if (Name == "__HOME_iPad__") {
			THIS_DEVICE.InitialDigitalClockWidget();
			THIS_DEVICE.weatherWidgetDiv = document.createElement("div");
			THIS_DEVICE.weatherWidgetDiv.classList.add("open-weather-widget");
			THIS_DEVICE.InitiateStyle();
			THIS_DEVICE.InitiateWeatherWidgetWithStyle_API();
			setTimeout(function() {THIS_DEVICE.launchWeatherWidget();
			}, 200);

			THIS_DEVICE.pollForUpdate();
		}

	}catch(e){
		alert(THIS_DEVICE.Name + ".OnGUILoaded error:" + e);
	}
};

THIS_DEVICE.OnGUIWake = function(){
	//This function is called by the API whenever the iOS or Android device wakes from sleep
	try{

	}catch(e){
		alert(THIS_DEVICE.Name + ".OnGUIWake error:" + e);
	}
};

THIS_DEVICE.OnGUIWillGoto = function(Name){
	//This function is called by the API before a page jump
	try{

	}catch(e){
		alert(THIS_DEVICE.Name + ".OnGUIWillGoto error:" + e);
	}
};

THIS_DEVICE.WeatherWidgetDivFunc = function(city, icon, description, temp, feels_like, wind, humidity, pressure, date) {
	var weatherWidgetDivHtml = `
		<div
		  id="openweathermap-widget-15"
		  class="container-widget container-widget--15">
		  <div id="container-openweathermap-widget-15">
			<div class="widget-right weather-right--type1 widget-right--brown">
			  <div class="widget-right__header widget-right__header--brown">
				<div class="widget-right__layout">
				  <div>
					<h2 class="widget-right__title">${city}, AU</h2>

					<p class="widget-right__description">${description}</p>
				  </div>
				</div>

				<img
				  class="weather-right__icon weather-right__icon--type1"
				  alt="Weather in Melbourne, AU"
				  src="images/${icon}.png"
				  width="128"
				  height="128"/>
			  </div>

			  <div class="weather-right weather-right--brown">
				<div class="weather-right__layout">
				  <div class="weather-right__temperature">${temp}<span>°C</span></div>

				  <div class="weather-right__weather">
					<div class="weather-right-card">
					  <table class="weather-right__table">
						<!-- <tbody> -->

						<tbody>
						  <tr class="weather-right__items">
							<th
							  class="weather-right__item"
							  colspan="2">
							  Details
							</th>
						  </tr>

						  <tr class="weather-right__items">
							<td class="weather-right__item">Feels like</td>

							<td class="weather-right__item weather-right__feels">
							  ${feels_like}

							  <span>°C</span>
							</td>
						  </tr>

						  <tr class="weather-right__items">
							<td class="weather-right__item">Wind</td>

							<td class="weather-right__item weather-right__wind-speed">${wind} m/s</td>
						  </tr>

						  <tr class="weather-right-card__items">
							<td class="weather-right__item">Humidity</td>

							<td class="weather-right__item weather-right__humidity">${humidity}%</td>
						  </tr>

						  <tr class="weather-right-card__items">
							<td class="weather-right__item">Pressure</td>

							<td class="weather-right__item weather-right__pressure">${pressure} hPa</td>
						  </tr>
						</tbody>
					  </table>
					</div>
				  </div>
				</div>
			  </div>

			  <div class="widget-right__footer widget-right__footer--brown">
				<div class="widget-right__layout">
				<div class="widget-right__logo_black_small"></div>


				  <div class="widget-right__date">${date}</div>
				</div>
			  </div>
			</div>
		  </div>
		</div>

	`;

	setTimeout(function() {
		THIS_DEVICE.weatherWidgetDiv.innerHTML = weatherWidgetDivHtml;
		document.body.appendChild(THIS_DEVICE.weatherWidgetDiv);
	},500);
}

THIS_DEVICE.pollForUpdate = function () {

	var i = 0, loop_length = i++, loop_speed = THIS_DEVICE.SETTINGS.PollFrequencySeconds*1000;

	function loopWeather(){
		i= 1;
		THIS_DEVICE.InitiateWeatherWidgetWithStyle_API();
		if (i===loop_length) clearInterval(handlerWeather);
	}

	function loopClock(){
		i= 1;
		THIS_DEVICE.InitialDigitalClockWidget();
		if (i===loop_length) clearInterval(handlerClock);
	}

	var handlerWeather = setInterval(loopWeather, loop_speed);
	var handlerClock   = setInterval(loopClock, 10000);

};
