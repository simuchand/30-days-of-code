setInterval(showTime, 1000);

function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let timePeriod = "AM"

    if (hour > 12) {
        hour -= 12;
        timePeriod = "PM";
    } else if (hour === 0) {
        hour = 12;
        timePeriod = "AM"
    }

    hour = hour < 10 ? "0"+hour : hour
    min = min < 10 ? "0"+min : min
    sec = sec < 10 ? "0"+sec : sec

    timePeriod = timePeriod.fontcolor("black")
    document.getElementById("clock")
        .innerHTML = hour + ":" + min + ":" + sec + "\n" + timePeriod;
}

function changeColor(color) {
    document.getElementById("clock")
        .style.color = color
}