const secondHand = document.querySelector(".analog-clock .clock-second-hand");
const minuteHand = document.querySelector(".analog-clock .clock-minute-hand");
const hourHand = document.querySelector(".analog-clock .clock-hour-hand");

const hourDigital = document.querySelector(".digital-clock .hour");
const secondDigital = document.querySelector(".digital-clock .second");
const minuteDigital = document.querySelector(".digital-clock .minute");

checkTime = (i) => {
    if(i < 10){
        i = "0" + i;
    }
    return i;
}

setInterval( () => {
    let now= new Date();
    let hour = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();

    secondHand.style.transform = `rotateZ(${sec * 6}deg)`;
    minuteHand.style.transform = `rotateZ(${min * 6}deg)`;
    hourHand.style.transform = `rotateZ(${hour * 30}deg)`;

    let m = checkTime(min);
    let s = checkTime(sec);
    hourDigital.innerText = `${hour}`;
    minuteDigital.innerText = `${m}`;
    secondDigital.innerText = `${s}`;
})