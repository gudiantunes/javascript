import { requestPermission, showTestNotification } from './notification.js';

requestPermission()

let min = 0;
let sec = 0;
let interval;

let state = 0;
let stateTime;
let focusAmound = 0;

const stateList = ['Focus', 'Short Rest', 'long Rest'];

const focusTime = document.getElementById('focus-time');
const sRestTime = document.getElementById('short-rest');
const fRestTime = document.getElementById('long-rest');
const focusCont = document.getElementById('focus-amount')

const indicator = document.getElementById('state-lbl');

const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');

const secLbl = document.getElementById('seconds');
const minLbl = document.getElementById('minutes');

stateTime = focusTime;
indicator.innerHTML = stateList[state];

startBtn.addEventListener('click', function () {
    interval = setInterval(updateTime, 10);
})

stopBtn.addEventListener('click', function () {
    clearInterval(interval);
})

resetBtn.addEventListener('click', function () {
    clearInterval(interval);
    min = 0;
    sec = 0;
    state = 0;
    focusAmound = 0;
    secLbl.innerHTML = '00';
    minLbl.innerHTML = '00';
    indicator.innerHTML = stateList[state];
})

function updateTime () {
    sec++;
    secLbl.innerHTML = formatTime(59 - sec);

    if (sec >= 59) {
        sec = 0;
        min ++;
    }

    minLbl.innerHTML = formatTime(stateTime.value - min);

    if (min >= stateTime.value) {
        if (state == 0) {
            sec = 0;
            min = 0;
            stateTime = sRestTime;
            state = 1;
            focusAmound++;
            showTestNotification()
            if (focusAmound >= focusCont.value) {
                stateTime = fRestTime;
                state = 2;
                focusAmound = 0
            }
        } else  {
            sec = 0;
            min = 0;
            stateTime = focusTime;
            state = 0;
        }

        indicator.innerHTML = stateList[state];
    }
}

function formatTime (time) {
    let out;
    if (time <= 9) {
        out = '0' + time;
    }
    if (time > 9) {
        out = time;
    }
    return out;
}
