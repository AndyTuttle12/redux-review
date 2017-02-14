import $ from 'jquery';

const API_KEY = '482c145ce8edf1d69ea5168f9d06460c';
const weatherURL = 'http://api.openweathermap.org/data/2.5/weather?units=imperial&appid=' + API_KEY + '&zip=';

export default function GetTheWeather(zipCode){
	console.log("ACTION", zipCode);
	const fullWeatherUrl = weatherURL + zipCode;
	const thePromise = $.getJSON(fullWeatherUrl);
	console.log(thePromise);
	return {
		type: "getWeather",
		payload: thePromise
	}

}