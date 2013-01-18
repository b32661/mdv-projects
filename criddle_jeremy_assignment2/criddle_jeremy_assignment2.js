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
var planFlight = function (startingDest, secondDest, thirdDest){
    console.log( "We are going to fly from the " +startingDest + " to  the " + secondDest + " then to the " + thirdDest);
    return
};
var controlsTest = function (controls, numOfTest){
    console.log("There are " + controls.length + " different controls available, and we will test " + numOfTest + " of those controls.");
    for (i = 0; i < numOfTest; i++){
        console.log("testing " + controls[i]);
    };
    console.log("Finished tesitng controls.");
    return
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
var flightPlan = planFlight("Den", " Kitchen", " Bedroom");
var controlTestResults = controlsTest(controls, 4);
console.log("All checks clear, we are ready for take-off. Enjoy your flight.")

