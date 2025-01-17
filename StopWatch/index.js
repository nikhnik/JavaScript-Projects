var hours = 0;
var minutes = 0;
var seconds = 0;
var miliSeconds = 0;
var interval;
$("#start").prop("disabled", false);
$("#reset").prop("disabled", true);
$("#stop").prop("disabled", true);
$("#start").click(function () {
    $("#start").prop("disabled", true);
    $("#reset").prop("disabled", false);
    $("#stop").prop("disabled", false);
    clearInterval(interval);
    interval = setInterval(function () {
        miliSeconds++;
        if (miliSeconds == 100) {
            seconds++;
            miliSeconds = 0;
        }
        if (seconds == 60) {
            minutes++;
            seconds = 0;
        }
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }

        let displaySeconds = seconds < 10 ? "0" + seconds : seconds;
        let displayMinutes = minutes < 10 ? "0" + minutes : minutes;
        let displayHours = hours < 10 ? "0" + hours : hours;
        let displayMiliSeconds = miliSeconds < 10 ? "0" + miliSeconds : miliSeconds;
        $("#timer").html(displayHours + ":" + displayMinutes + ":" + displaySeconds + "." + displayMiliSeconds);
    }, 10);
});

$("#stop").click(function () {
    clearInterval(interval);
    $("#start").prop("disabled", false);
    $("#reset").prop("disabled", false);
    $("#stop").prop("disabled", true);
});

$("#reset").click(function () {
    clearInterval(interval);
    hours = 0;
    minutes = 0;
    seconds = 0;
    $("#timer").html("00:00:00")
    $("#start").prop("disabled", false);
    $("#reset").prop("disabled", true);
    $("#stop").prop("disabled", true);
});