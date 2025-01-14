var minute = 25;
var seconds = 0;
var interval;
$("#reset").click(function () {
    clearInterval(interval);
    minute = 25;
    seconds = 0;
    $("#timer").text("25:00")
});

$("#start").click(function () {
    clearInterval(interval);
    interval = setInterval(function () {
        if (seconds == 0) {
            if (minute == 0) {
                clearInterval(interval);
                alert("Times Up");
                minute = 25;
                seconds = 0;
                $("#timer").text("25:00")
                return;
            }
            minute--;
            seconds = 59;
        }
        else {
            seconds--;
        }

        let displayMin = minute < 10 ? "0" + minute : minute;
        let displaySe = seconds < 10 ? "0" + seconds : seconds;
        $("#timer").text(displayMin + ":" + displaySe);
    }, 1000);
});

$("#stop").click(function () {
    clearInterval(interval);
});