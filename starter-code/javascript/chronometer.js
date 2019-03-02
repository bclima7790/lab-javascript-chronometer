// Constructor
function Chronometer() { 
    this.currentTime = 0
    this.intervalId = 0
    this.intervalSecond = 0
    this.clockIsStopped = 0
    this.currentTimeMiliSeconds = 0
    this.miliSeconds = 0
}    

Chronometer.prototype.startClick = function () {
    let self = this;
    this.clockIsStopped = false 
    this.intervalId = setInterval(function(){
        self.currentTime = self.currentTime + 1 
        self.setTime()
    },1000)
 };

Chronometer.prototype.setMinutes = function () {
  return parseInt(this.currentTime/60)
};

Chronometer.prototype.setSeconds = function () {
    return parseInt(this.currentTime%60)
};

Chronometer.prototype.twoDigitsNumber = function (time) {
    var correctedTime = 0
    if(time < 10){
        correctedTime = ("0"+time)
    }    
    else{
        correctedTime = time.toString()
    }
    
    return correctedTime
};

Chronometer.prototype.setTime = function () {
   this.minutes = this.twoDigitsNumber(this.setMinutes())
   this.seconds = this.twoDigitsNumber(this.setSeconds())
};

Chronometer.prototype.setMilliseconds = function () {

};

Chronometer.prototype.stopClick = function () {
    clearInterval(this.intervalId)
    clearInterval(this.intervalSecond)
    this.clockIsStopped = true
  };

Chronometer.prototype.resetClick = function () {
    this.currentTime = 0
};

Chronometer.prototype.splitClick = function () {
};
