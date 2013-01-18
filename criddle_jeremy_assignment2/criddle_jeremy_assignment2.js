// Jeremy Criddle
// SDI 1301
// Project 2
// R/C Helicopter pre-flight checklist

//set global variables
var name = "S107",
    flights = 6,
    controls = ["more throttle", "less throttle", "forward", "backwards", "rotate left", "rotate right"];

//functions
var isCharged = function (battery) {
    if (battery > 20) {
        console.log("We have " + battery + "% battery, we are a go!")
    } else {
        console.log("The battery is low, please charge before flight.")
    }
};
var conditions;
conditions = function (windSpeed, windTolerence) {
    if (windSpeed < windTolerence) {
        console.log("Wind speed check is a go.");
        return
    }
    else ("Perhaps you should wait for better wind conditions.");
    return
};
var startRotor = function (rotorSpeed) {
    while (rotorSpeed <= 80){
        console.log("Our main rotor is at " + rotorSpeed + " % power, looking good!");
        rotorSpeed += 10;
    } return rotorSpeed;
};
var flightPlan = function (startingDest, secondDest, thirdDest){
    console.log("Our goal is to fly from " + startingDest + " to " + thirdDest + "and finally, back to where we started at the " + startingDest);


};

// Main Code
console.log("model " + name + " infrared helicopter, with " + flights + " successful flights completed, ready for pre-flight check.");
console.log("Starting pre-flight check list");
console.log('First up is the battery check.');
isCharged(99);
console.log('Next up, lets check the wind conditions.')
var currentConditions = conditions(2, 5);
console.log("Roger, lets go ahead and get the main rotor up to speed.");
var mainRotorSpeed = startRotor(0);
console.log("Fantastic, main rotor is good, let's reduce power back down to 40%.");
mainRotorSpeed = 40;
console.log(mainRotorSpeed + " %, check.");

