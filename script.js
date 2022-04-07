const secondHand = document.querySelector(".sec-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");


function constructTime() {
    var now = new Date();
    

    const seconds = now.getSeconds()
    const secdeg = ((seconds/60) * 360) + 90
    secondHand.style.transform = `rotate(${secdeg}deg)`

    const minutes = now.getMinutes()
    const mindeg = ((minutes/60) * 360) + 90
    minuteHand.style.transform = `rotate(${mindeg}deg)`

    const hours = now.getHours()
    const hourdeg = ((hours/60) * 360) + 90
    hourHand.style.transform = `rotate(${hourdeg}deg)`
}


setInterval(constructTime, 1000)