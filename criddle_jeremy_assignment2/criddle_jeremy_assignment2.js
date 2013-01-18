// Jeremy Criddle
// SDI 1301
// Project 2
// R/C Helicopter

//set global variables
var name = "S107",
    numberOfFlights = 16,
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
    while (rotorspeed <= 60);
    console.log("Windspeed is at " + rotorSpeed + "percent");
    rotorspeed = rotorSpeed + 5;
}


console.log("Starting pre-flight check list");
console.log('First up is the battery check.');
isCharged(99);
console.log('Next up, lets check the wind conditions.')
var currentConditions = conditions(2, 5);
console.log("Roger, lets go ahead and get the main rotor up to speed");
var rotorSpeed = startRotor(0);

