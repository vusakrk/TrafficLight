const trafficlight = document.getElementById("trafficlight");
const red = document.getElementById("red");
const yellow = document.getElementById("yellow");
const green = document.getElementById("green");

// red.style.opacity = .2;



setTimeout(function() {
    red.style.opacity = 1;
    yellow.style.opacity = .2;
    green.style.opacity = .2;
}, 10000);

setTimeout(function() {
    red.style.opacity = .2;
    yellow.style.opacity = 1;
    green.style.opacity = .2;
}, 2000);

setTimeout(function() {
    red.style.opacity = .2;
    yellow.style.opacity = .2;
    green.style.opacity = 1;
}, 15000);


// var load = setInterval(function() {


// }, 14000);