const prompt = require('prompt-sync')();
// Prompting for no reason

// Weekend Day???
// This set sunday as 1 and saturday as 7 then checks if day equals one of these
function is_Weekend_Maybe(day){
    if (day == 1 || day == 7){
        return true
    }
    else{
        return false
    }
}
// I put in some numbers for day then the code above checked it and did the printing thing
console.log(is_Weekend_Maybe(1)) 
console.log(is_Weekend_Maybe(5)) 
// 9 division
// This assigns the variable value here: | To make it so when I put a number in thats divisible by 9 and even to get the nine, if not nein. 
function divvy9(value){ // <-------------
    if (value % 9 == 0 && value % 2 == 0){
        return (true + " nine");
    }
    else{
        return (false + " nein");
    }
}
// Ones good, ones bad (18 bad)
console.log(divvy9(18));
console.log(divvy9(27));

// Cylyndrical area of a circle long 3d.
// Calculates circle area in function, (I got math.PI from internet not chat GPT ok)
function area_circle(r){
    return Math.PI*r**2
}
// Printing the run value circle area
console.log(area_circle(2));
// Calculates the label of a cilyndrical polygon
function area_label(r, h){
    return 2 * Math.PI * r * h
}
// gives label values then running
console.log(area_label(2,10));

// Newer function for the whole surface area, gets r and h again then uses the 2 last functions to calculate it since they already have the formulas in them, then we have to parse.float them so they can add together.
function area_cylinder(r, h){
    return ("The cylindirical area " + ((parseFloat(area_circle(r))) + (parseFloat(area_label(r,h)))));
}
// Same values as before but new code in the function!
console.log(area_cylinder(2,10));

//Ghost finding perchance
// Angry meter, checks if they are happy or angry and if they're one of the 2 then they'll need to lock it down. if not they just neutraled.
// (1 is angry and 2 is happy then 3 is neutral)
function ghost_watch(polter, wolter){
    if ((polter  == 1 && wolter == 1) || (polter  == 2 && wolter == 2)){
        return (true + " LOCK IT DOWN, THEYRE BOTH FEELING EXCITABLE!!!!!");
    }
    else{
        return (false + " Looks like the ghosts are neuteraled today for now. ");
    }
}
console.log(ghost_watch(1, 1));
console.log(ghost_watch(3, 2));