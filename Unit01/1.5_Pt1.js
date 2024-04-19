//1.5 Part 1:
const prompt = require('sync-prompt')();

let age = prompt("How old are you? ");
let ageInt = parseInt(age)

if (ageInt >= 50) {
    console.log("You're " + age + " years old!? You definitely qualify for the senior discount.");
}
else if (ageInt < 16) {
    console.log("Under 16? Can't drive yet.");
}
else if (ageInt == 40){
    console.log("You're getting pretty old. ")
}
else {
    console.log("Middle aged.");
}

let user_name = prompt("What is your name??? ");
let lenUser = user_name.length();

if (user_name == "Mr.J"){
    console.log("🐠");
}
else if (lenUser > 6){
    console.log("You have a long name.");
}

let name = prompt("How long is your name? ");
if (lenUser == name - 1){
    console.log("Great job knowing the length of your name.");
}
else{
    console.log("Bad guess.");
}