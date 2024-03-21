const fs = require('fs');

const temperatures = fs.readFileSync("data.csv").toString().split(" ");
console.log(temperatures);




const maxTemperature = Math.max(...temperatures);
const minTemperature = Math.min(...temperatures);

const indexOfMaxTemperature = temperatures.indexOf(maxTemperature);
const indexOfMinTemperature = temperatures.indexOf(minTemperature);

console.log(`Highest Temperature: ${maxTemperature} at index ${indexOfMaxTemperature}`);
console.log(`Lowest Temperature: ${minTemperature} at index ${indexOfMinTemperature}`);

// neveikia index