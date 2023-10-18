const kelvin = 293; //this is weather in kelvin
const celsius = kelvin - 273; // this is weather in celsius
let fahrenheit = celsius * (9 / 5) + 32; //this is weather in fahrenheit
fahrenheit = Math.floor(fahrenheit); //round the result
console.log(`the Temperature is ${fahrenheit} degrees fahrenheit.`);

var Newton = celsius * (33 / 100);
Newton = Math.floor(Newton);
console.log(`the Temperature is ${Newton} degrees newton.`);
