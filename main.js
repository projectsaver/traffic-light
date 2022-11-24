let redLight = document.getElementById("stopLight");
let yellowLight = document.getElementById("readyLight");
let greenLight = document.getElementById("goLight");

let stopButtonVariable = document.getElementById("stopButton");
let readyButtonVariable = document.getElementById("readyButton");
let goButtonVariable = document.getElementById("goButton");

function stopFunction() {
    redLight.style.backgroundColor = "#cf1124"; //red color light
    yellowLight.style.backgroundColor = "#4b5069"; //grey color light
    greenLight.style.backgroundColor = "#4b5069"; //grey color light

    stopButtonVariable.style.backgroundColor = "#cf1124"; //Red Color Button
    readyButtonVariable.style.backgroundColor = "#1f1d41"; //Voilet Color Button
    goButtonVariable.style.backgroundColor = "#1f1d41"; //Voilet Color Button
}

function readyFunction() {
    yellowLight.style.backgroundColor = "#f7c948"; //Yellow Light Color
    redLight.style.backgroundColor = "#4b5069"; // Grey Color
    greenLight.style.backgroundColor = "#4b5069"; //Grey Color

    readyButtonVariable.style.backgroundColor = "#f7c948"; // Yellow Color Button
    stopButtonVariable.style.backgroundColor = "#1f1d41"; // Voilet Color Button
    goButtonVariable.style.backgroundColor = "#1f1d41"; // Voilet Color Button
}

function goFunction() {
    greenLight.style.backgroundColor = "#199473";
    redLight.style.backgroundColor = "#4b5069";
    yellowLight.style.backgroundColor = "#4b5069";

    goButtonVariable.style.backgroundColor = "#199473";
    readyButtonVariable.style.backgroundColor = "#1f1d41";
    stopButtonVariable.style.backgroundColor = "#1f1d41";
}
