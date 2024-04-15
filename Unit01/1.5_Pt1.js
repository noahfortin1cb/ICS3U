//1.5 Part 1:

const prompt = require(sync-prompt)();

let age = prompt("How old are you? ");
let ageInt = parseInt(age)

if (ageInt >= 50) {
    console.log("You're " + age + " years old!? You definitely qualify for the senior discount.")
}
else if (ageInt < 16) {
    console.log("Under 16? Can't drive yet.")
}
else {
    console.log("Middle aged.")
}

let user_name = prompt("What is your name??? ")
let lenUser = len(user_name)

if (user_name == "Mr.J"){
    console.log("🐠")
}
else if (lenUser > 6){
    console.log("You have a long name.")
}