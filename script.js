const daysEl = document.getElementById('days');
const hoursEl= document.getElementById('hours');
const minsEl= document.getElementById('minutes');
const secondsEl= document.getElementById('seconds');

const newYears = "1 Jan 2022";

function countdown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSec = (newYearsDate-currentDate) /1000;

    const days = Math.floor(totalSec / 86400);

    const hours = Math.floor((totalSec / 3600) % 24);

    const minutes =Math.floor(totalSec/60)%60;

    const seconds = Math.floor(totalSec%60);

    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time){
    return time < 10 ? (`0${time}`) : time;
}

countdown();

setInterval(countdown, 1000);