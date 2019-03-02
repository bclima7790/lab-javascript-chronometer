var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');

function printMinutes() {
    setInterval(function(){
        chronometer.setTime()
        document.getElementById('minDec').innerText = chronometer.minutes[0]
        document.getElementById('minUni').innerText = chronometer.minutes[1]
        console.log(secDec)
        console.log(secUni)
        },500)
    
}

function printSeconds() {
    setInterval(function(){
        chronometer.setTime()
        document.getElementById('secDec').innerText = chronometer.seconds[0]
        document.getElementById('secUni').innerText = chronometer.seconds[1]
        console.log(secDec)
        console.log(secUni)
        },500)
}

function printSplit() {

    var lista = document.getElementById('split-list')
    var split = document.createElement('li')
    var secLeft = document.getElementById('secDec').innerText
    var secRight = document.getElementById('secUni').innerText
    var minLeft = document.getElementById('minDec').innerText
    var minRight = document.getElementById('minUni').innerText

    splitText = minLeft + minRight + ":" + secLeft + secRight
    split.innerText = splitText

    lista.appendChild(split)

}

function clearSplits() {

}
function rightButtonAtributes(){
    if (chronometer.clockIsStopped == true) {
        btnRight.className = "btn reset"
        btnRight.innerText = "RESET"
    }
    else{
        btnRight.className = "btn split"
        btnRight.innerText = "SPLIT"
    }
}

function leftButtonAtributes(){
    if (chronometer.clockIsStopped == true) {
        btnLeft.className = "btn start"
        btnLeft.innerText = "START"   
        printMinutes()
        printSeconds()
    }
    else{
        btnLeft.className = "btn stop"
        btnLeft.innerText = "STOP"
  
    }    
}

/* Reset Split Button */
btnRight.addEventListener('click', function () {

    if (event.target.className == "btn reset") {
        chronometer.resetClick()
    }
    else{
        printSplit()
    }
    console.log(chronometer.clockIsStopped)
    console.log(event.target)
});

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if (event.target.className == "btn stop") {
        chronometer.stopClick()
        chronometer.clockIsStopped = true
        leftButtonAtributes()
        rightButtonAtributes()
    }
    else{
        chronometer.startClick()
        chronometer.clockIsStopped = false
        leftButtonAtributes()
        rightButtonAtributes()
    }  
    console.log(chronometer.clockIsStopped)  
    console.log(event.target)
});

window.onload = function(){
    chronometer.currentTime = 0
    chronometer.clockIsStopped = true
    leftButtonAtributes()
    rightButtonAtributes()
    console.log(chronometer.clockIsStopped)
    console.log(EventTarget)
}