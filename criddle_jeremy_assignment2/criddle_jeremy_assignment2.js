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
        console.log("Check, we have " + battery + "% battery")
    } else {
        console.log("The battery is low, please charge before flight.")
    }
};
var conditions;
conditions = function (windSpeed, windTolerence) {
    if (windSpeed < windTolerence) {
        console.log('Wind speed check is a go.");
    }
    else ("Perhaps you should wait for better wind conditions.");
};

