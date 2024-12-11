//
function output(message) {
    window.outputTag.innerHTML += message;
}

//Bracket notation with default value
function outputSpecifiedId(message, outputTag) {
    window[outputTag].innerHTML += message;
}

//
function outputDefault(message, outputTag = "outputTag") {
    window[outputTag].innerHTML += message;
}