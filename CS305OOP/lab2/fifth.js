"use strict";

/*Write a function, convertFahrenheit, that takes an input parameter with a temperature in Fahrenheit
and returns the temperature in Celsius./

/**
 * input:  temperature in Fahrenheit is a input
output:  temperature in celcius is an output
processing:
 - in order to change temperature from Fahrenheit to Celsius 
 - subtract 32 from the temperature in Fahrenheit and multiply by 5/9
 
 
 * 
 * @param {Number} tempInFahrenheit is a number
 * @returns {Number} tempInCelecius is a number
 */
function convertFahrenheit(tempInFahrenheit) {
    const tempInCelsius = 5 / 9 * (parseFloat(tempInFahrenheit) - 32)
    return tempInCelsius;
}
console.log("expect 0: ", convertFahrenheit(32));
console.log("expect -17.7778: ", convertFahrenheit(0));
console.log("expect 100: ", convertFahrenheit(212));
console.log("expect 37.7778: ", convertFahrenheit(100));

