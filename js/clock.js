const hoursEl = document.querySelector('.clock-hours');
const minutesEl = document.querySelector('.clock-minutes');
const secondsEl = document.querySelector('.clock-seconds');
const timeOfDay = document.querySelector('.clock-time');

function getTime() {
    const time = new Date();

    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let hour12 = hours - 12;

    switch (hours) {
        case 0:
            hoursEl.textContent = 12;
            timeOfDay.textContent = 'AM';
            break;
        case 10:
            hoursEl.textContent = hours;
            timeOfDay.textContent = 'AM';
            break;
        case 11:
            hoursEl.textContent = hours;
            timeOfDay.textContent = 'AM';
            break;
        case 12:
            hoursEl.textContent = hours;
            timeOfDay.textContent = 'PM';
            break;
        case 22:
            hoursEl.textContent = hour12;
            timeOfDay.textContent = 'PM'
            break;
        case 23:
            hoursEl.textContent = hour12;
            timeOfDay.textContent = 'PM';
            break;
    }

    if (hours > 12 && hours < 22 ) {
        hoursEl.textContent = `0${hour12}`;
        timeOfDay.textContent = 'PM';
    } else if(hours > 0 && hours < 10){
        hoursEl.textContent = `0${hours}`;
        timeOfDay.textContent = 'AM';
    }

    if (minutes < 10) {
        minutesEl.textContent = `0${minutes}`;
    } else {
        minutesEl.textContent = minutes;
    }

    if (seconds < 10) {
        secondsEl.textContent = `0${seconds}`;
    } else {
        secondsEl.textContent = seconds;
    }

}

setInterval(getTime, 1000);