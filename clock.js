let hours, minutes, seconds, date, day, month, year, dayValue;
let months = ["Jaanuar", "Veebruar", "Märts", "Aprill", "Mai", "Juuni", "Juuli", "August"];
let days = ["Pühapäev", "Esmaspäev", "Teisipäev", "Kolmapäev", "Neljapäev", "Reede", "Laupäev"];
window.addEventListener("keypress", textSize);
let timeFontSize = 3;
document.getElementById("clock").style.fontSize = timeFontSize + "em";

function textSize(e){
    console.log(e.keyCode);
    if(e.keyCode == 45){
        timeFontSize = timeFontSize - 0.1;
        document.getElementById("clock").style.fontSize = timeFontSize + "em";
    }
    
    if(e.keyCode == 43){
        timeFontSize = timeFontSize + 0.1;
        document.getElementById("clock").style.fontSize = timeFontSize + "em";
    }
}

function updateClock(){
    date = new Date();
    console.log(date);
    hours = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();
    console.log(hours, minutes, seconds);
    if(hours < 10){
        hours = "0" + hours
    }
    if(minutes < 10){
        minutes = "0" + minutes
    }
    if(seconds < 10){
        seconds = "0" + seconds
    }
    document.getElementById("hoursElement").innerHTML = hours;
    document.getElementById("minutesElement").innerHTML = ":" + minutes;
    document.getElementById("secondsElement").innerHTML = ":" + seconds;
}

function updateDate(){
    date = new Date();

    day = date.getDate();
    month = date.getMonth();
    year = date.getFullYear();
    dayValue = date.getDay();

    document.getElementById("dayElement").innerHTML = day;
    document.getElementById("monthElement").innerHTML = months[month];
    document.getElementById("yearElement").innerHTML = year;

    document.getElementById("day").innerHTML = days[dayValue];
}

updateClock();
updateDate();
setInterval(updateClock, 1000);


const checkboxes = document.querySelectorAll('.checkbox_container input[type="checkbox"]');
const dayElement = document.getElementById('day');
const dateElement = document.getElementById('dateElement');
const bodyElement = document.body;
const clockContainer = document.getElementById('clockContainer');

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        if (this.parentElement.querySelector('p').textContent === 'Show weekday') {
            if (this.checked) {
                dayElement.style.display = 'block';
            } else {
                dayElement.style.display = 'none';
            }
        } else if (this.parentElement.querySelector('p').textContent === 'Show year') {
            if (this.checked) {
                yearElement.style.display = 'block';
            } else {
                yearElement.style.display = 'none';
            }
        } else if (this.parentElement.querySelector('p').textContent === 'Show only clock') {
            if (this.checked) {
                dayElement.style.display = 'none';
                dateElement.style.display = 'none';
            } else {
                dayElement.style.display = 'flex'; 
                dateElement.style.display = 'flex'; 
            }
        } else if (this.parentElement.querySelector('p').textContent === 'Dark theme') {
            if (this.checked) {
                bodyElement.style.background = '#000';
            } else {
                bodyElement.style.background = '#7fa095';
            }
        } else if (this.parentElement.querySelector('p').textContent === 'Big Text') {
            if (this.checked) {
                clockContainer.style.fontSize = '4em'; 
            } else {
                clockContainer.style.fontSize = '2em'; 
            }
        } else if (this.parentElement.querySelector('p').textContent === 'Small Text') {
            if (this.checked) {
                clockContainer.style.fontSize = '1em'; 
            } else {
                clockContainer.style.fontSize = '2em'; 
            }
        } 
    });
});
