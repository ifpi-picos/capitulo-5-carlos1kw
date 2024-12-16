function celsiusToFahrenheit(celsius) {
    return (celsius * 1.8) + 32;
}

let celsius = 28;
let fahrenheit = celsiusToFahrenheit(celsius);
console.log(`${celsius}°C é igual a ${fahrenheit}°F`);