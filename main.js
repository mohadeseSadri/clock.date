function showTime() {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let d = date.getDate();
    let ma = date.getMonth();
    let y = date.getFullYear();
    let session = "AM"
    if (h == 0) {
        h = 12;
    }
    if (h > 12) {
        h = h - 12;
        session = "PM";
    }
    h = (h < 10) ? `0${h}` : h;
    m = (m < 10) ? `0${m}` : m;
    s = (s < 10) ? `0${s}` : s;
    let time = `${h}:${m}:${s} ${session}`;
    let daate = `${d}/${ma}/${y}`;
    document.querySelector(".clock").innerText = time;
    document.querySelector(".Date").innerText = daate;
}
setInterval(showTime, 1000);