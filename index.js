const request = require('request');	// Make sure to have these installed using NPM
const argv = require('yargs').argv;	// Used to create flags

let apiKey = 'e6924a42e8f918317bc681bfe0b980e3';
let city = argv.c || 'ottawa';	//Default to Ottawa
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`	

// Retrieve the URL
request(url, function (err, response, body) {	
  if(err){
    console.log('error:', error);	//Print to screen
  } else {
    let weather = JSON.parse(body)	//Javascript object
    let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;	// Calling the methods
    console.log(message);	//Print to screen
  }
});