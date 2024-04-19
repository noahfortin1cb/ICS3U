//1.5 Part 1:
const prompt = require('prompt-sync')();

let age = prompt("How old are you? ");
let ageInt = parseInt(age)
// Takes a variable for the age then parseints it
if (ageInt >= 50) {
    console.log("You're " + age + " years old!? You definitely qualify for the senior discount.");
}
else if (ageInt < 16) {
    console.log("Under 16? Can't drive yet.");
}
else if (ageInt == 40){
    console.log("You're getting pretty old. ")
}
else if (ageInt % 2 == 0){
    console.log("Your age is even! ")
}
else {
    console.log("Middle aged and your age is an odd number. ");
}
// Goes through a bunch of conditions and prints out the fitting answer.
let user_name = prompt("What is your name??? ");
let lenUser = user_name.length - 1;
// Gets the username of the user and checks it's length then stores it in a variable.
if (user_name == "Mr.J"){
    console.log("🐠");
}
else if (lenUser > 6){
    console.log("You have a long name.");
}
// If the user inputs Mr.J you get a fish, if they input a string longer than 6 letters it will output that you have a long name.

x = true
while (x == true){
    let name = prompt("How long is your name? ");
    if (lenUser == name + 1){
        console.log("Great job knowing the length of your name.");
        x = false
    }
    else if (lenUser > name + 1){
        console.log("Too high! ");
    }
    else if (lenUser < name + 1){
        console.log("Too low! ");
    }
}
//Gets the input for how long the user thinks their name is, then if they get it wrong it makes them try again, and if they get it right they can leave.