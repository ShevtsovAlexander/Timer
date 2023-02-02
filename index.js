const timerDisplay = document.querySelector('#timer_display')
const timer = document.querySelector('#timer')

var timeBegan = null; 
var timeStopped = null;
var stoppedDuration = 0;
var startInterval = null; 
var flag = false; 

timer.addEventListener('click', () => {
    if(!flag) {
        startTimer()
        flag = true
    } else {
        stopTimer();
        flag = false
    }
   
})

timer.addEventListener('dblclick', () => {
    resetTimer()
})

startTimer = () => {
    if(timeBegan == null) {
        timeBegan = new Date()
    }
    if(timeStopped !== null) {
        stoppedDuration += (new Date() - timeStopped);
    }
    startInterval = setInterval(clockRunning, 10)
}

stopTimer = () => {
    timeStopped = new Date();
    clearInterval(startInterval)
}
 
function clockRunning() {
    let currentTime = new Date();
    let timeElapsed = new Date(currentTime - timeBegan - stoppedDuration);

    let minutes = timeElapsed.getUTCMinutes()   
    let seconds = timeElapsed.getUTCSeconds() 
    let milliseconds = timeElapsed.getUTCMilliseconds();

    milliseconds = Math.floor(milliseconds/10);


    timerDisplay.textContent = (minutes = minutes < 10 ? '0' + minutes : minutes) + ':' + 
    (seconds = seconds < 10 ? '0' + seconds:seconds) + ":" +
    (milliseconds = milliseconds < 10 ? '0' + milliseconds:milliseconds);

}
    
resetTimer = () => {
    clearInterval(startInterval);
    timeBegan = null;
    timeStopped = null;
    stoppedDuration = 0;
    timerDisplay.innerHTML = "00:00:00";
    flag = false;
  }