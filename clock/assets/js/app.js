// JS CODE GOES HERE
const sec = document.querySelector('.secs');
const min = document.querySelector('.mins');
const hour = document.querySelector('.hours');
const currentDateTime = new Date();

// TO GET SECS, MINS, & HOURS
const total = {
    sec: currentDateTime.getSeconds(),
    min: currentDateTime.getMinutes(),
    hour: currentDateTime.getHours()
}

// POSITION
const pos = {
    sec: (270 + total.sec * (360 / 60)) % 360,
    min: (270 + total.min * (360 / 60)) % 360,
    hour: (270 + total.hour * (360 / 12)) % 360
}

function dial(){
    sec.style.transform = `rotate(${pos.sec += (360/60)%360}deg)`;
    min.style.transform = `rotate(${pos.min += (360/60*60)%360}deg)`;
    hour.style.transform = `rotate(${pos.hour += (360/60*60*12)%360}deg)`;
}
setInterval(dial, 1000);