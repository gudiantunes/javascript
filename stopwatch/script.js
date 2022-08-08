let ms = 0;
let sec = 0;
let min = 0;

const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');
const showMin = document.getElementById('minutes');
const showSec = document.getElementById('seconds');
const showMs = document.getElementById('milisseconds');

let interval;

startBtn.onclick = function () {
    interval = setInterval(updateTimer, 10);
}

stopBtn.onclick = function () {
    clearInterval(interval);
}

resetBtn.onclick = function () {
    ms = 0;
    sec = 0;
    min = 0;
    clearInterval(interval);
    showMs.innerHTML = '00';
    showSec.innerHTML = '00';
    showMin.innerHTML = '00';
}

function updateTimer () {
    ms++;
    if (ms < 10) {
        showMs.innerHTML = '0' + ms;
    } 
    if (ms >= 10) {
        showMs.innerHTML = ms;
    } 
    if (ms >= 99){
        sec++;
        ms = 0;
    }

    if (sec < 9) {
        showSec.innerHTML = '0' + sec;
    } 
    if (sec > 9) {
        showSec.innerHTML = sec;
    } 
    if (sec >= 60) {
        min++;
        sec = 0;
    }

    if (min < 10) {
        showMin.innerHTML = '0' + min;
    } else {
        showMin.innerHTML = min
    }
}

