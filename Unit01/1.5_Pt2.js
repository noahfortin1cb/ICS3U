const prompt = require('prompt-sync')();

let user = prompt("What's your username? ")

// Gets the username from the user
let userName = prompt("What is your name? ");
let age = parseInt(prompt("Hello "+ userName + ", how old are you?"));
// Takes a variable for the age and parseints it

// Checking age and printing appropriate message
if (age < 16) {
     console.log("Under 16? Can't drive yet.");
}
     else {
     console.log("You're getting pretty old. ");
}

// Menu
console.log("1 - Play\n2 - Options\n3 - DLC\n4 - Check for Updates\n5 - Exit");

// Asking for a selection
let selection = parseInt(prompt("Hi "+ userName + ". Please make a selection: "));
//Printing everything depending on the users answer
if (selection == 1) {
    console.log("Let's play!");
} 
else if (selection == 2) {
    console.log("You selected Options.");
} 
else if (selection == 3) {
    console.log("No new DLC at this time.");
} 
else if (selection == 4) {
    console.log("Everything is up to date.");
} 
else if (selection == 5) {
    console.log("Bye!");
} 
else {
    console.log("Invalid selection. Get it right next time.");
}

// Optional challenge 1: Times
let time = parseInt(prompt("Enter a time between 0-23: "));

if (time >= 0 && time <= 11) {
    console.log("Good morning!");
    if (time < 6){
        console.log("Also good night!")
    }
}
else if (time >= 12 && time <= 17) {
    console.log("Good afternoon!");
}
else if (time >= 18 && time <= 23) {
    console.log("Good evening!");
}
else {
    console.log("0-23, can't be that hard to comprehend.");
}

// Optional challenge 2: Random number characteristics
let random_number = Math.random() * 10;     
// Get a single-digit value (with decimals)
random_number = Math.floor(random_number);
// Gets rid of the decimals

if (random_number == 0){
    console.log("You got 0!")
}