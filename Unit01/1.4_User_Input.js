//Makes prompt work
const prompt = require('prompt-sync')();
//Part 1, Asking for stuff about the user
let yearb = prompt("What year were you born?");
console.log("You entered "+yearb);
let age = 2024 - yearb;
console.log( "You are likely", age, "years old");
let name = prompt("What is your name??  ");
console.log( "Your name is " +name + ". You are likely", age, "years old");
let leng = name.length;
console.log("Your name is "+leng+" letters long.");

//Part 2, temp converter
//Get's variables for each of the things we need
let celcius = prompt("Enter temp in celcius: ");
let fahrenheit = prompt("Enter temp in fahrenheit: ");
let ans = prompt("Type 1 inputted celcius and 2 for fahrenheit. ")
//Calculates the conversions
fahC = (celcius*1.8)+32;
celF = (fahrenheit - 32)/1.8;
//Checks what the user inputted for the answer and gives the appropriate answer.
if (ans == 1){
    console.log(fahC, "degrees fahrenheit is your celcius in fahrenheit degree. ");
}
// Same thing but for fahrenheit to Celcius
else if (ans == 2){
    console.log(celF, "degrees celcius is your fahrenheit in celcius degree. ");
}
//Tells the user to put in a valid number
else{
    console.log("Put in a valid number please........................................................");
}

//Part 3, extra thing

let word = prompt("What's the longest word you know?  ")
let wordlen = word.length()

if (wordlen <= 8){
    console.log("You are dumb");
}
else if (wordlen <= 10){
    console.log("You are below average");
}
else if (wordlen <= 12){
    console.log("You are average");
}
else if (wordlen <= 14){
    console.log("You are above average");
}
else if (wordlen <= 16){
    console.log("You are way above average");
}
else if (wordlen > 16){
    console.log("You are a genius");
}
else {
    console.log("Input a valid word please");
}
//Basically just checks the length of the word the user inputted then outputts a correlating answer.