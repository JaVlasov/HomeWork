setInterval(function() {
    let time = new Date(),
        h = time.getHours(),
        m = time.getMinutes(),
        s = time.getSeconds(),
        showTime = document.querySelector('.clock');



if (h < 10) {
    h = "0" + h;
}
if (m < 10) {
    m = "0" + m;
}
if (s < 10) {
    s = "0" + s;
}

showTime.textContent = h + ":" + m + ":" + s;

}, 1000);
