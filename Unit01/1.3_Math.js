//Part 1, assigning the variables celcius a value of 100 and fahrenheit a value of 0, then converting celcius to fahrenheit and printing it
let celcius = 100;
let fahrenheit = 0;
celcius = celcius + 2;
fahrenheit = (celcius*1.8)+32;
console.log(fahrenheit);
//Part 2, assigning fahrenheit a new value then converting it to celcius and overwriting the previous value with that one, then printing with and without text.
fahrenheit = 77;
celcius = (fahrenheit - 32)/1.8;
console.log(celcius);
//4+
kelvin = 273.15
celKel = celcius + 273.15

console.log("77 degrees Fahrenheit is "+fahrenheit+" degrees in celsius, and "+celcius, "degrees celcius is "+celKel,"degrees in kelvin.");
//Part 3, assigning values to y2,y1,x2 and x1 in order to calculate slope and assign the end value to m, the printing out the value with no text.
let x1 = -4;
let x2 = 6;
let y1 = 5;
let y2 = 0;
let m = (y2 - y1)/(x2 - x1);

console.log(m);