const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
    let date = new Date();
    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    let hours = date.getHours();

    console.log(seconds);
    let rotateAngleSeconds = ((seconds/60) * 360) + 90;
    secondHand.style.transform = `rotate(${rotateAngleSeconds}deg)`;

    let rotateAngleMinutes = ((minutes/60) * 360) + 90;
    minuteHand.style.transform = `rotate(${rotateAngleMinutes}deg)`;

    let rotateAngleHours = ((hours/12) * 360) + 90;
    hourHand.style.transform = `rotate(${rotateAngleHours}deg)`;
}

setInterval(setDate, 1000);