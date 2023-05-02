const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
console.log(secondHand, minHand);


function setDate() {
    const date = new Date();

    //seconds
    const seconds = date.getSeconds();
    const secondsDegree = (seconds * 6);
    secondHand.style.transform = `rotate(${secondsDegree + 90}deg)`

    //minutes
    const minutes = date.getMinutes();
    const minutesDegree = (minutes * 6) + (secondsDegree / 60);
    minHand.style.transform = `rotate(${minutesDegree + 90}deg)`
    // console.log(minutes)

    // hours 

    const hours = date.getHours();
    const hoursDegree = (hours * 30) + (minutesDegree / 60)
    hourHand.style.transform = `rotate(${hoursDegree + 90}deg)`
}
// setDate()


setInterval(setDate, 1000);