// Function for Getting Different Cities weather
function cityInfo() {
    alert("Loading weather report...")
}

// Variable and Function for accepting the Cookie
var cookiePolicy = document.querySelector(".cookiePopUp");

function acceptCookie() {
    cookiePolicy.remove();
}

// Functons for changing the Temperature to Celsius or Fahrenheit
function Cels2Faren(degrees) {
    return Math.round(9 / 5 * degrees + 32);
}

function Faren2Cels(degrees) {
    return Math.round(5 / 9 * (degrees - 32));
}

function TempConversion(element) {
    for(var i = 1; i < 9; i++ ) {
        var temp = document.querySelector("#temp" + i);
        var tempVal = parseInt(temp.innerText);
        if (element.value == "°C") {
            temp.innetText = Faren2Cels(tempVal);
        } 
        else {
            temp.innerText = Cels2Faren(tempVal);
        }
    }
}